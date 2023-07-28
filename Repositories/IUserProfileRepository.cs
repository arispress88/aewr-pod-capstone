using System.Collections.Generic;
using AEWRPod.Models;

namespace AEWRPod.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetUserProfileById(int id);
    }
}