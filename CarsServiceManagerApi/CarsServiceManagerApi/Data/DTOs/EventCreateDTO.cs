namespace CarsServiceManagerApi.Data.DTOs;

public class EventCreateDTO
{
    public int StartTime { get; set; }

    public int EndTime { get; set; }

    public string Color { get; set; }

    public DateOnly Date { get; set; }

    public string Title { get; set; }
}
