namespace CarsServiceManagerApi.Data;

public class Event
{
    //public int ServiceId { get; set; }
    public int Id { get; set; }
    public int StartTime { get; set; }
    public int EndTime { get; set; }
    public string Color { get; set; }
    public DateOnly Date { get; set; }
    public string Title { get; set; }

    public virtual ICollection<EventAssignment> Assignments { get; set; } = new List<EventAssignment>();
}

