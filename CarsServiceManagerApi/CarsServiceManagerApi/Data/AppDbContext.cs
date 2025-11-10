using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CarsServiceManagerApi.Data;

public class AppDbContext : IdentityDbContext<User>
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Event> Events { get; set; }
    public DbSet<Instrument> Instruments { get; set; }
    public DbSet<EventAssignment> EventsAssignment { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<EventAssignment>()
            .HasKey(ea => ea.Id);

        builder.Entity<EventAssignment>()
            .HasOne(ea => ea.Event)
            .WithMany(e => e.Assignments)
            .HasForeignKey(ea => ea.EventId)
            .IsRequired(false);

        builder.Entity<EventAssignment>()
            .HasOne(ea => ea.User)
            .WithMany(u => u.EventAssignments)
            .HasForeignKey(ea => ea.UserId)
            .IsRequired(false);

        builder.Entity<EventAssignment>()
            .HasOne(ea => ea.Instrument)
            .WithMany(i => i.EventAssignments)
            .HasForeignKey(ea => ea.InstrumentId)
            .IsRequired(false);
    }
}
