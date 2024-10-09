import { NextResponse as Res } from "next/server";
import Vehicle from "../models/vehicle";

export async function GET() {
  try {
    // vertabanında verileri cekiyor
    const vehicles = await Vehicle.find();
    return Res.json({
      vehicles,
      message: "Araç Verileri Alındı",
    });
  } catch (err) {
    return Res.json(
      {
        message: "Araç Verileri Alınmadı Hata.!!!!",
      },
      { status: 500 }
    );
  }
}
