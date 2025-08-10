using CarsServiceManagerApi.Data.DTOs;
using Microsoft.AspNetCore.Identity;

namespace CarsServiceManagerApi.Services.Interfaces;

public interface IUserService
{
    public Task<IdentityResult> RegisterAsync(UserRegisterDTO input);
}
