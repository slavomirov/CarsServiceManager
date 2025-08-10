using CarsServiceManagerApi.Data;
using CarsServiceManagerApi.Data.Accessors.Interfaces;
using CarsServiceManagerApi.Data.DTOs;
using CarsServiceManagerApi.Services.Interfaces;
using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Identity;

namespace CarsServiceManagerApi.Services;

public class UserService(IUserAccessor userAccessor, UserManager<User> userManager, IValidator<UserRegisterDTO> userRegisterDTOValidator) : IUserService
{
    public async Task<IdentityResult> RegisterAsync(UserRegisterDTO input)
    {
        ValidationResult validationResult = await userRegisterDTOValidator.ValidateAsync(input);

        if (!validationResult.IsValid)
        {
            var error = new IdentityError
            {
                Code = "ValidationError",
                Description = string.Join(",", validationResult.Errors)
            };
            return IdentityResult.Failed(error);
        }

        var user = new User
        {
            UserName = input.Username,
            Email = input.Email,
            FirstName = input.FirstName,
            LastName = input.LastName,
            ServiceName = input.Service
        };

        var result = await userManager.CreateAsync(user, input.Password);
        return result;
    }
}
