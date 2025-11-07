using CarsServiceManagerApi.Data.DTOs;
using FluentValidation;

namespace CarsServiceManagerApi.Data.Validators;

public class EventValidator : AbstractValidator<Event>
{
    public EventValidator()
    {
        RuleFor(x => x.StartTime).NotEmpty();
        RuleFor(x => x.EndTime).NotEmpty();
        RuleFor(x => x.Date).NotEmpty();
        RuleFor(x => x.Title).NotEmpty();
    }
}
