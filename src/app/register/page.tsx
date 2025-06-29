import RegistrationForm from "./registration-form";

export default function RegisterPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Register for FestVerse</h1>
        <p className="text-muted-foreground mt-2">Secure your spot for an unforgettable experience.</p>
      </div>
      <RegistrationForm />
    </div>
  );
}
