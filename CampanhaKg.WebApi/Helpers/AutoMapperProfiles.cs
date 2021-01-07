using AutoMapper;
using CampanhaKg.Domain.Identity;
using CampanhaKg.WebApi.Dtos;

namespace CampanhaKg.WebApi.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserLoginDto>().ReverseMap();
        }
    }
}
