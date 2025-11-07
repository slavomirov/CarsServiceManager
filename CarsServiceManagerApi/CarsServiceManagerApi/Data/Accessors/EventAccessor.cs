using CarsServiceManagerApi.Data.Accessors.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CarsServiceManagerApi.Data.Accessors;

public class EventAccessor : IEventAccessor
{
    private readonly AppDbContext _appDbContext;

    public EventAccessor(AppDbContext context) => _appDbContext = context;


    public async Task AddAsync(Event input)
    {
        await _appDbContext.Events.AddAsync(input);
        await _appDbContext.SaveChangesAsync();
    }

    public async Task Delete(Event input)
    {
        _appDbContext.Events.Remove(input);
        await _appDbContext.SaveChangesAsync();
    }

    public async Task<List<Event>> GetAllAsync() => await _appDbContext.Events.ToListAsync();

    public async Task<Event?> GetByIdAsync(int id) => await _appDbContext.Events.FirstOrDefaultAsync(x => x.Id.Equals(id));

    public async Task UpdateAsync(Event input)
    {
        _appDbContext.Update(input);
        await _appDbContext.SaveChangesAsync();
    }
}
