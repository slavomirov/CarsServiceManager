using CarsServiceManagerApi.Data;
using CarsServiceManagerApi.Data.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace CarsServiceManagerApi.Controllers.Interfaces;

public interface IEventsController
{
    public Task<List<Event>> GetAllEvents();

    public Task<Event?> GetEvent(int id);

    public Task<IActionResult> DeleteEvent(int id);

    public Task<IActionResult> CreateEvent(EventCreateDTO input);

    public Task<IActionResult> UpdateEvent(Event input);
}
