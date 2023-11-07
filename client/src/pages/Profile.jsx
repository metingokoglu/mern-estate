import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profil</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profil"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="Şifre"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:placeholder-opacity-95 disabled:opacity-80">
          Güncelle
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Hesabı Sil</span>
        <span className="text-red-700 cursor-pointer">Çıkış Yap</span>
      </div>
    </div>
  );
}
