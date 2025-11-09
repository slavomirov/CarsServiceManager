using CarsServiceManagerApi.Data;
using CarsServiceManagerApi.Data.DTOs;

namespace CarsServiceManagerApi.Services.Interfaces;

public interface IEventService
{
    public Task<List<Event>> GetAllEventsAsync();

    public Task<Event?> GetEventAsync(int id);

    public Task DeleteEventAsync(int id);

    public Task CreateEventAsync(EventCreateDTO input);

    public Task UpdateEventAsync(Event input);

}
