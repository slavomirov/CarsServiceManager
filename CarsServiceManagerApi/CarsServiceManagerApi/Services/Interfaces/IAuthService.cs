using CarsServiceManagerApi.Data.DTOs;

namespace CarsServiceManagerApi.Services.Interfaces;

public interface IAuthService
{
    public Task<string> LoginAsync(UserLoginDTO input);
    public Task<string> LogoutAsync();
}
