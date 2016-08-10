using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

/// <summary>
/// Summary description for utils
/// </summary>
public class Utils
{
	
    public static string GetAllData()
    {
        using (var db = new barisDBEntities())
        {

            // update
            //var c = db.Cake.Where(i => i.Id == id).FirstOrDefault();
            //c.Name = "eeweww";
            //db.SaveChanges();

            // new
            //var c = new Cake();
            //c.Name = "sadsa";
            //c.Price = 1212;
            //db.Cake.Add(c);
            //db.SaveChanges();

            var data = new object[] {db.Cake.ToList(), db.Cookie.ToList()};


            return JsonConvert.SerializeObject(data);
        }
    }

    //public static void SetOrder()
    //{
    //    using (var db = new barisDBEntities())
    //    {
    //        var c = new Order();
    //        c.Name = "sadsa";
    //        c.Price = 1212;
    //        db.Cake.Add(c);
    //        db.SaveChanges();

    //    }
    //}
}