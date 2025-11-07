using CarsServiceManagerApi.Data.DTOs;
using FluentValidation;

namespace CarsServiceManagerApi.Data.Validators;

public class EventValidator : AbstractValidator<Event>
{
    public EventValidator()
    {
        RuleFor(x => x.StartTime).NotNull().Must(x => x >= 0);
        RuleFor(x => x.EndTime).NotNull().Must(x => x >= 0);
        RuleFor(x => x.Date).NotEmpty();
        RuleFor(x => x.Title).NotEmpty();
    }
}
