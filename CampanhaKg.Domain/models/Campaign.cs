using System;

namespace CampanhaKg.Domain.models
{
    public class Campaign
    {
        public int Id { get; set; }
        public virtual int FraternityId { get; set; }
        public virtual Fraternity Fraternity { get; set; }
        public DateTime Date { get; set; }
        public string Region { get; set; }
        public string Neighborhood { get; set; }
        public string Street01 { get; set; }
        public string Street02 { get; set; }
        public string Street03 { get; set; }
        public string Street04 { get; set; }
        public string Street05 { get; set; }
        public string Street06 { get; set; }
        public string Street07 { get; set; }
        public string Street08 { get; set; }
        public string Street09 { get; set; }
        public string Street010 { get; set; }
        public string Street011 { get; set; }
        public string Street012 { get; set; }
        public string Street013 { get; set; }
        public string Street014 { get; set; }
        public string Street015 { get; set; }
    }
}
