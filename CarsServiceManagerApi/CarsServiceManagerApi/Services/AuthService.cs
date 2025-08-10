using CarsServiceManagerApi.Data;
using CarsServiceManagerApi.Data.DTOs;
using CarsServiceManagerApi.Services.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace CarsServiceManagerApi.Services;

public class AuthService : IAuthService
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;

    public AuthService(UserManager<User> userManager, SignInManager<User> signInManager)
    {
        this._userManager = userManager;
        this._signInManager = signInManager;
    }

    public async Task<string> LoginAsync(UserLoginDTO input)
    {
        User? user = await _userManager.FindByEmailAsync(input.Email) ?? throw new Exception("Invalid credentials. ");

        var result = await _signInManager.CheckPasswordSignInAsync(user, input.Password, false);

        if (!result.Succeeded)
        {
            throw new Exception("Invalid credentials. ");
        }

        return "Login successful. ";
    }

    public async Task<string> LogoutAsync()
    {
        await _signInManager.SignOutAsync();
        return "Logout successful. ";
    }
}