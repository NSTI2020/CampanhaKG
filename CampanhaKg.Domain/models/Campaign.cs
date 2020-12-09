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

        public Campaign()
        {

        }
        public Campaign(int id, DateTime date, Fraternity fraternity, string region, string neighborhood, string street01,
            string street02, string street03, string street04, string street05,
            string street06, string street07, string street08, string street09,
            string street010, string street011, string street012,
            string street013, string street014, string street015)
        {
            Id = id;
            Date = date;
            Fraternity = fraternity;
            Region = region;
            Neighborhood = neighborhood;
            Street01 = street01;
            Street02 = street02;
            Street03 = street03;
            Street04 = street04;
            Street05 = street05;
            Street06 = street06;
            Street07 = street07;
            Street08 = street08;
            Street09 = street09;
            Street010 = street010;
            Street011 = street011;
            Street012 = street012;
            Street013 = street013;
            Street014 = street014;
            Street015 = street015;

        }
    }
}
