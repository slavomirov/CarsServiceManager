using CarsServiceManagerApi.Data.Accessors.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace CarsServiceManagerApi.Data.Accessors;

public class UserAccessor : IUserAccessor
{
    private readonly AppDbContext _dbContext;
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;

    public UserAccessor(AppDbContext dbContext, UserManager<User> userManager, SignInManager<User> signInManager)
    {
        this._dbContext = dbContext;    
        this._userManager = userManager;
        this._signInManager = signInManager;
    }
}
