using CarsServiceManagerApi.Data.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace CarsServiceManagerApi.Controllers.Interfaces;

public interface IUsersController
{
    public Task<IActionResult> RegisterAsync(UserRegisterDTO input);
    public Task<IActionResult> LoginAsync(UserLoginDTO input);
    public Task<IActionResult> LogoutAsync();
}
