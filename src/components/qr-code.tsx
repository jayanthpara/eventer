import Image from "next/image";

interface QRCodeProps {
  data: string;
  size?: number;
}

const QRCode = ({ data, size = 200 }: QRCodeProps) => {
  if (!data) return null;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    data
  )}`;

  return (
    <div className="p-4 bg-white rounded-lg inline-block">
      <Image
        src={qrCodeUrl}
        alt="Event Pass QR Code"
        width={size}
        height={size}
      />
    </div>
  );
};

export default QRCode;
