"use client";

import { useState } from "react";

const WEBHOOK_URL = "https://n8n.binhaitech.com/webhook/form-lead";

export default function LeadForm() {
  const [form, setForm] = useState({
    ten: "",
    sdt: "",
    thoi_gian: "",
    dich_vu: "Phủ Ceramic",
    mo_ta: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );
  const [msg, setMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validate cứng trên web trước khi gửi
    if (!form.ten.trim()) {
      setStatus("error");
      setMsg("Vui lòng nhập họ tên.");
      return;
    }
    if (!/^0\d{9}$/.test(form.sdt.trim())) {
      setStatus("error");
      setMsg("Số điện thoại không hợp lệ (10 số, bắt đầu bằng 0).");
      return;
    }

    setStatus("sending");
    setMsg("");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.status === "ok") {
        setStatus("ok");
        setMsg(data.message || "Đã nhận thông tin, chúng tôi sẽ liên hệ sớm!");
        setForm({
          ten: "",
          sdt: "",
          thoi_gian: "",
          dich_vu: "Phủ Ceramic",
          mo_ta: "",
        });
      } else {
        setStatus("error");
        setMsg(data.message || "Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch {
      setStatus("error");
      setMsg("Không gửi được, vui lòng kiểm tra kết nối.");
    }
  };

  const inputClass =
    "w-full bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 text-neutral-100 text-sm focus:border-amber-400 focus:outline-none transition";
  const labelClass = "block text-neutral-400 text-xs mb-1.5";

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
      <div className="mb-2">
        <label className={labelClass}>Họ tên</label>
        <input
          name="ten"
          value={form.ten}
          onChange={handleChange}
          placeholder="Nguyễn Văn A"
          className={inputClass}
        />
      </div>

      <div className="flex gap-3 mt-3">
        <div className="flex-1">
          <label className={labelClass}>Số điện thoại</label>
          <input
            name="sdt"
            value={form.sdt}
            onChange={handleChange}
            placeholder="0912345678"
            className={inputClass}
          />
        </div>
        <div className="flex-1">
          <label className={labelClass}>Thời gian mong muốn</label>
          <input
            name="thoi_gian"
            value={form.thoi_gian}
            onChange={handleChange}
            placeholder="Thứ 4 tuần sau"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-3">
        <label className={labelClass}>Dịch vụ quan tâm</label>
        <select
          name="dich_vu"
          value={form.dich_vu}
          onChange={handleChange}
          className={inputClass}
        >
          <option>Phủ Ceramic</option>
          <option>Dán PPF</option>
          <option>Đánh bóng</option>
          <option>Vệ sinh nội thất</option>
          <option>Khác</option>
        </select>
      </div>

      <div className="mt-3">
        <label className={labelClass}>Mô tả nhu cầu</label>
        <textarea
          name="mo_ta"
          value={form.mo_ta}
          onChange={handleChange}
          placeholder="Xe Vios, muốn phủ ceramic toàn thân..."
          rows={3}
          className={inputClass}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === "sending"}
        className="w-full mt-5 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-neutral-950 py-3 rounded-lg font-bold transition shadow-lg shadow-amber-500/20"
      >
        {status === "sending" ? "Đang gửi..." : "Gửi thông tin đặt lịch"}
      </button>

      {msg && (
        <p
          className={`mt-4 text-sm text-center ${
            status === "ok" ? "text-green-400" : "text-red-400"
          }`}
        >
          {msg}
        </p>
      )}
    </div>
  );
}
