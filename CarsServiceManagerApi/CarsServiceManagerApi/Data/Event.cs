namespace CarsServiceManagerApi.Data;

public class Event
{
    public int Id { get; set; }

    public int StartTime { get; set; }

    public int EndTime { get; set; }

    public string Color { get; set; }

    public DateTime Date { get; set; }

    public string Title { get; set; }

    //public int ServiceId { get; set; } TODO: Mapping with service
}
