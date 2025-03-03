"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <Card className="w-full max-w-[400px] border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Đăng nhập</CardTitle>
          <p className="text-sm text-gray-600">Nhà thuốc online An Khang</p>
        </CardHeader>
        
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
              <Input type="password" placeholder="Mật khẩu" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm">
                Giữ tôi đăng nhập
              </label>
            </div>
          </form>
          
          <div className="mt-4">
            <Button className="w-full bg-green-700 hover:bg-green-800">
              Đăng nhập
            </Button>
          </div>

          <div className="mt-4 text-center">
            <Link href="/auth/forgot-password" className="text-sm text-green-700 hover:underline">
              Quên mật khẩu?
            </Link>
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">hoặc</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Đăng nhập với Google
            </Button>
            <Button variant="outline" className="w-full">
              <img src="/apple.svg" alt="Apple" className="w-5 h-5 mr-2" />
              Đăng nhập với Apple
            </Button>
          </div>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <Link href="/auth/register" className="text-green-700 hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}