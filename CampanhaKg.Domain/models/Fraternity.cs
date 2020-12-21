using System.Collections.Generic;

namespace CampanhaKg.Domain.models
{
    public class Fraternity : Address
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Campaign> Campaigns { get; set; }
        public int VoluntaryId { get; set; }
        public Voluntary Voluntary { get; set; }
        public string photo { get; set; }



    }
}
