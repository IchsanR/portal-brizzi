import { CustomForm } from "@/components/customForm/CustomForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import z from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Email tidak valid"),
  password: z.string().min(6, "Minimal 6 karakter"),
});
const Login = () => {

  const handleSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log("Login data:", data);
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Card className="w-full max-w-sm p-6">
        <CardHeader>
          <CardTitle>Selamat Datang di Portal BRIZZI</CardTitle>
          <CardDescription>
            Silahkan masuk menggunakan akun Anda
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm
            schema={loginSchema}
            fields={[
              { name: "username", label: "Username", placeholder: "Masukkan username" },
              {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "Masukkan password",
              },
            ]}
            onSubmit={handleSubmit}
            submitText="Login" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;