using CarsServiceManagerApi.Controllers.Interfaces;
using CarsServiceManagerApi.Data.DTOs;
using CarsServiceManagerApi.Services.Interfaces;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace CarsServiceManagerApi.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase, IUsersController
{
    private readonly IUserService _userService;
    private readonly IAuthService _authService;

    public UsersController(IUserService userService, IAuthService authService, IValidator<UserRegisterDTO> userRegisterDTOValidator)
    {
        this._userService = userService;
        this._authService = authService;
    }

    [HttpPost("Register")]
    public async Task<IActionResult> RegisterAsync(UserRegisterDTO input)
    {
        var result = await _userService.RegisterAsync(input);

        if (!result.Succeeded)
        {
            var errors = result.Errors.Select(e => e.Description);
            return BadRequest(new { Errors = errors });
        }

        return Ok(new { Message = "User registered successfully." });
    }

    [HttpPost("Login")]
    public async Task<IActionResult> LoginAsync(UserLoginDTO input)
    {
        try
        {
            var result = await _authService.LoginAsync(input);
            return Ok(new { message = result });
        }
        catch (Exception ex)
        {
            return Unauthorized(new { error = ex.Message });
        }
    }

    [HttpPost("Logout")]
    public async Task<IActionResult> LogoutAsync()
    {
        await _authService.LogoutAsync();
        return Ok();
    }
}
