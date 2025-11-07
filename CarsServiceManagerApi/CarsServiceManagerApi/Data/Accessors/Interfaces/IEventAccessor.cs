namespace CarsServiceManagerApi.Data.Accessors.Interfaces;

public interface IEventAccessor
{
    public Task<List<Event>> GetAllAsync();

    public Task<Event?> GetByIdAsync(int id);

    public Task Delete(Event input);

    public Task AddAsync(Event input);

    public Task UpdateAsync(Event input);
}
