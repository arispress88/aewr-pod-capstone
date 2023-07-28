using AEWRPod.Models;

namespace AEWRPod.Repositories
{
    public interface IUserRepository
    {
        UserProfile GetByEmail(string email);
    }
}