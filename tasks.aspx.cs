using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class tasks : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        var tp = Request["tp"] == null ? "getAll" : Request["tp"] as string;
        switch (tp)
        {
            case "getAll":
                Response.Write(Utils.GetAllData());

                break;
            default:
                break;
        }
    }

}