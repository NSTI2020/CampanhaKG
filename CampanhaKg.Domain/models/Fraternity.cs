using System.Collections.Generic;
using CampanhaKg.Domain.Identity;

namespace CampanhaKg.Domain.models
{
    public class Fraternity : Address
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Campaign> Campaigns { get; set; }
        public int UserId { get; set; }
        public User user { get; set; }
        public string photo { get; set; }



    }
}
