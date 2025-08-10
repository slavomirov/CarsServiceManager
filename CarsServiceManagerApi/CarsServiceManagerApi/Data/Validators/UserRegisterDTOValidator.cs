using CarsServiceManagerApi.Data.DTOs;
using FluentValidation;

namespace CarsServiceManagerApi.Data.Validators;

public class UserRegisterDTOValidator : AbstractValidator<UserRegisterDTO>
{
    public UserRegisterDTOValidator()
    {
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.PasswordConfirm).Equal(x => x.Password).NotEmpty();
    }
}
