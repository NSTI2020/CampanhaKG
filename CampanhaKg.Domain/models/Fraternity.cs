using System.Collections.Generic;

namespace CampanhaKg.Domain.models
{
    public class Fraternity
    {
        public Fraternity()
        {

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Campaign> Locations { get; set; }
        public Voluntary Voluntary { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }



    }
}
