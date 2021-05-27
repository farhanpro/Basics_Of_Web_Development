import java.sql.*;
public class Slip3_1
{
            public static void main(String args[]){
                        Connection con;
                        try{
                                    Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
                                    con=DriverManager.getConnection("jdbc:odbc:dsn");                     
                                    if(con==null)
                                    {
                                                System.out.println("Connection Failed....");
                                                System.exit(1);
                                    }


                                    Statement stmt=con.createStatement();
                                    ResultSet rs=stmt.executeQuery("select * From employee Where dept='computer science'");
                                    System.out.println("eno\t"+"ename\t"+"department\t"+"sal");
                                    while(rs.next())
                                    {
                                                System.out.println("\n"+rs.getInt(1)+"\t"+rs.getString(2)+"\t"+rs.getString(3)+""+rs.getInt(4));
                                    }
                                    con.close();
                                    rs.close();
                                    stmt.close();     
                        }          

                        catch(Exception e)
                        {
                                    System.out.println(e);
                        }
            }
}