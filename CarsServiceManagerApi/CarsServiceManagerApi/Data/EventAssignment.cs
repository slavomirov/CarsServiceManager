namespace CarsServiceManagerApi.Data;

public class EventAssignment
{
    public int Id { get; set; }

    public int? EventId { get; set; }
    public virtual Event? Event { get; set; }

    public string? UserId { get; set; }
    public virtual User? User { get; set; }

    public int? InstrumentId { get; set; }
    public virtual Instrument? Instrument { get; set; }

    
    public string? Role { get; set; }
    public DateTime AssignedAt { get; set; } = DateTime.Now;
}
