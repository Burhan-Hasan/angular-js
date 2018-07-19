using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace angularLearning.Entities
{
    public class Car
    {
        public Car(int id, string manufacturer, string model, int year)
        {
            Id = id;
            Manufacturer = manufacturer;
            Model = model;
            Year = year;
        }

        public int Id { get; set; }

        public string Manufacturer { get; set; }

        public string Model { get; set; }

        public int Year { get; set; }
    }
}
