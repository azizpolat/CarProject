import { NextResponse as Res } from "next/server";
import Vehicle from "../../models/vehicle";

export async function GET(req, { params }) {
  try {
    // param olarak gelen id veritabanın elemanı al
    const vehicle = await Vehicle.findById(params.id);

    // idli elema yoksa hata gonder
    if (!vehicle)
      return Res.json(
        {
          message: "Arac Bulunamdı",
        },
        { status: 404 }
      );
    // arac bulundu ise
    return Res.json({
      vehicle,
      message: "Araç Verisi Alındı",
    });
  } catch (err) {
    return Res.json(
      {
        message: "Araç Detayları  Alınmadı Hata.",
      },
      { status: 500 }
    );
  }
}
