using CarsServiceManagerApi.Data;
using CarsServiceManagerApi.Data.Accessors;
using CarsServiceManagerApi.Data.Accessors.Interfaces;
using CarsServiceManagerApi.Data.DTOs;
using CarsServiceManagerApi.Data.Validators;
using CarsServiceManagerApi.Services.Interfaces;
using FluentValidation;

namespace CarsServiceManagerApi.Services;

public class EventService(IEventAccessor eventAccessor) : IEventService
{
    private readonly IEventAccessor _eventAccessor = eventAccessor;
    private readonly EventValidator validator = new EventValidator();

    public async Task CreateEventAsync(EventCreateDTO input)
    {
        var newEvent = new Event()
        {
            Color = input.Color,
            Date = input.Date,
            EndTime = input.EndTime,
            StartTime = input.StartTime,
            Title = input.Title
        };

        await ValidateEventAsync(newEvent);
        await _eventAccessor.AddAsync(newEvent);
    }

    public async Task DeleteEventAsync(int id)
    {
        var e = await GetEventAsync(id);

        if (e != null)
            await _eventAccessor.Delete(e);
        else
            throw new Exception("Event not found!");
    }

    public async Task<List<Event>> GetAllEventsAsync() => await _eventAccessor.GetAllAsync();

    public async Task<Event?> GetEventAsync(int id) => await _eventAccessor.GetByIdAsync(id);

    public async Task UpdateEventAsync(Event input)
    {
        await ValidateEventAsync(input);
        await _eventAccessor.UpdateAsync(input);
    }

    private async Task ValidateEventAsync(Event input)
    {
        var validationResult = await validator.ValidateAsync(input);

        if (!validationResult.IsValid)
        {
            var errorMessages = string.Join(", ", validationResult.Errors.Select(e => e.ErrorMessage));
            throw new ValidationException($"Validation error: {errorMessages}");
        }
    }
}
