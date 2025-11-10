namespace CarsServiceManagerApi.Data;

public class Instrument
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public string Type { get; set; }

    public bool InUsage { get; set; }

    public virtual ICollection<EventAssignment> EventAssignments { get; set; } = new List<EventAssignment>();
}
