"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <Card className="w-full max-w-[400px] border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Đăng ký</CardTitle>
          <p className="text-sm text-gray-600">Nhà thuốc online An Khang</p>
        </CardHeader>
        
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input type="text" placeholder="Họ" />
              <Input type="text" placeholder="Tên" />
            </div>
            
            <div className="space-y-2">
              <Input type="email" placeholder="Địa chỉ email" />
            </div>
            
            <div className="space-y-2">
              <Input type="password" placeholder="Mật khẩu (8 đến 16 ký tự)" />
            </div>

            <div className="space-y-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Lựa chọn nhóm tuổi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-24">18-24</SelectItem>
                  <SelectItem value="25-34">25-34</SelectItem>
                  <SelectItem value="35-44">35-44</SelectItem>
                  <SelectItem value="45+">45+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Lựa chọn giới tính" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Nam">Male</SelectItem>
                  <SelectItem value="Nữ">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-green-700 hover:bg-green-800">
              Đăng ký
            </Button>
          </form>

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
              Tiếp tục với Google
            </Button>
            <Button variant="outline" className="w-full">
              <img src="/apple.svg" alt="Apple" className="w-5 h-5 mr-2" />
              Tiếp tục với Apple
            </Button>
          </div>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Đã có tài khoản?{" "}
            <Link href="/auth/login" className="text-green-700 hover:underline">
              Đăng nhập
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}