using Microsoft.AspNetCore.Identity;

namespace CarsServiceManagerApi.Data;

public class User : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string ServiceName { get; set; }
    public UserType Type { get; set; }
}
