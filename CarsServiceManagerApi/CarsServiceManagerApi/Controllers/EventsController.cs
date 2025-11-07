using CarsServiceManagerApi.Controllers.Interfaces;
using CarsServiceManagerApi.Data;
using CarsServiceManagerApi.Data.DTOs;
using CarsServiceManagerApi.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CarsServiceManagerApi.Controllers;

[ApiController]
[Route("[controller]")]
public class EventsController : ControllerBase, IEventsController
{
    private readonly IEventService _eventService;

    public EventsController(IEventService eventService) => _eventService = eventService;

    [HttpPost("Create")]
    public async Task<IActionResult> CreateEvent(EventCreateDTO input)
    {
        await _eventService.CreateEventAsync(input);
        return Ok();
    }

    [HttpDelete("Delete")]
    public async Task<IActionResult> DeleteEvent(int id)
    {
        await _eventService.DeleteEventAsync(id);
        return Ok();
    }

    [HttpGet("GetAll")]
    public async Task<List<Event>> GetAllEvents() => await _eventService.GetAllEventsAsync();

    [HttpGet("GetById")]
    public async Task<Event?> GetEvent(int id) => await _eventService.GetEventAsync(id);

    [HttpPost("Update")]
    public async Task<IActionResult> UpdateEvent(Event input)
    {
        await _eventService.UpdateEventAsync(input);
        return Ok();
    }
}
