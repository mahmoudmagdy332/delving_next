import { Box, Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSettingSliceSelector } from "../../app/slices/settingSlice";
import { useLanguageSelector } from "../../app/slices/languageSlice";
const Footer = () => {
  const { setting } = useSettingSliceSelector((state) => state.settingReducer);

  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );

  // const pages = [
  //   { name: translations.home, link: "/" },
  //   { name: translations.Courses, link: "courses" },
  //   { name: translations.Pricing, link: "/pricing" },
  //   // {name:'Testimonials',link:"/testimonials"},
  // ];
  const pages2 = [
    { name: translations.AboutUs, link: "/about" },
    { name: translations.Careers, link: "/careers" },
    { name: translations.FAQs, link: "/faq" },
    { name: translations.Help, link: "/help" },
  ];

  const sosials = [
    { icon: <FaFacebookF />, link: setting?.contact.facebook },
    { icon: <FaXTwitter />, link: setting?.contact.x },
    { icon: <FaInstagram />, link: setting?.contact.instgram },
    { icon: <FaLinkedinIn />, link: setting?.contact.linkedin },
  ];
  return (
    <Box sx={{ backgroundColor: "#010203" }}>
      <div className="w-11/12 lg:w-10/12 mx-auto pt-16">
        <Box className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 ">
          <Box className="col-span-2 flex flex-col gap-8 justify-center items-start lg:justify-start">
            {/* {theme.palette.mode === 'dark' ?   <img src="/images/LOGO/Logo (2) 1.png" className="w-56"/>:<img src="/images/LOGO/icon black 1.png" className="w-56"/>} */}
            <img alt="" src={setting?.footer_logo} className="w-56" />

            <Typography sx={{ color: "#fcfcfd" }}>
              {setting?.footer_description}
            </Typography>
          </Box>
          <div className="flex flex-col gap-3 items-center md:items-start">
            {setting?.pages.map((page) => (
              <Link to={`page/${page.slug}`}>
                <Typography
                  sx={{ color: "#fcfcfd", "&:hover": { color: "#ffe266" } }}
                >
                  {page.title}
                </Typography>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 items-center md:items-start">
            {pages2.map((page) => (
              <Link to={page.link}>
                <Typography
                  sx={{ color: "#fcfcfd", "&:hover": { color: "#ffe266" } }}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-6 items-start">
            <Link
              to={setting?.contact.phone ? setting?.contact.phone : ""}
              className="flex gap-2 items-center"
            >
              <img alt="" src="/images/ICONS/telephone-white.svg" />
              <div className="text-sm text-white">{setting?.contact.phone}</div>
            </Link>
            <Link
              to={setting?.contact.email ? setting?.contact.email : ""}
              className="flex gap-2 items-center"
            >
              <img alt="" src="/images/ICONS/email-white.svg" />
              <div className="text-sm text-white">{setting?.contact.email}</div>
            </Link>
            <Link
              to={setting?.contact.address ? setting?.contact.address : ""}
              className="flex gap-2 items-center"
            >
              <img alt="" src="/images/ICONS/location-white.svg" />
              <div className="text-sm text-white">
                {setting?.contact.address}
              </div>
            </Link>

            <div className="flex gap-4 mt-5 col-span-2 lg:col-span-1  justify-center lg:justify-end ">
              {sosials.map((sosial) => (
                <a href={sosial.link ? sosial.link : ""} target="_blank">
                  <Box
                    sx={{
                      color: "#fcfcfd",
                      "&:hover": { color: "#ffe266" },
                      fontSize: "18px",
                    }}
                  >
                    {sosial.icon}
                  </Box>
                </a>
              ))}
            </div>
          </div>
        </Box>
        <Box className="mt-5 flex flex-col lg:flex-row gap-4 justify-between py-5 border-t">
          <div className="flex gap-4">
            <Link to="/Terms">
              <Typography sx={{ color: "gray.light" }}>
                {translations.Terms}
              </Typography>
            </Link>
            <Link to="/Privacy">
              <Typography sx={{ color: "gray.light" }}>
                {translations.Privacy}
              </Typography>
            </Link>
          </div>
          <div className="flex">
            <Typography sx={{ color: "gray.light" }}>
              {translations.copyWrite}
            </Typography>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Footer;
