-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 09, 2024 lúc 05:09 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ecco`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `Categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'NEW', '2024-04-27 04:15:02', '2024-04-27 04:15:02'),
(2, 'NỮ', '2024-04-27 04:15:02', '2024-04-27 04:15:02'),
(3, 'NAM', '2024-04-27 04:15:50', '2024-04-27 04:15:50'),
(4, 'GOLF', '2024-04-27 04:15:50', '2024-04-27 04:15:50'),
(5, 'MID OF SEASON SALE', '2024-04-27 04:18:15', '2024-04-27 04:18:15');

-- --------------------------------------------------------

-- -------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `payment` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `payment`, `status`, `name`, `address`, `phone`, `total`, `UserId`, `createdAt`, `updatedAt`) VALUES
(5, 'Thanh toán khi nhận hàng', 1, 'Trieu', 'Ha Noi', '0336978807', 4861000, 5, '2024-05-11 03:16:19', '2024-09-09 02:40:05');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_products`
--

CREATE TABLE `order_products` (
  `id` int(11) NOT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `order_products`
--

INSERT INTO `order_products` (`id`, `OrderId`, `ProductId`, `size`, `quantity`, `createdAt`, `updatedAt`) VALUES
(6, 5, 10, '39', 1, '2024-05-11 03:16:19', '2024-05-11 03:16:19');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `description` text DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `price`, `description`, `quantity`, `CategoryId`, `createdAt`, `updatedAt`) VALUES
(8, 'ECCO STREET TRAY M', '/images/products/sneaker_14.png', 5841000, 'Bộ sưu tập giày sneaker, thể thao chất lượng cao ECCO STREET TRAY có vẻ ngoài vừa phải, chừng mực, đáng tin cậy về công năng, giúp bạn tận hưởng phong cách sống năng động, thông minh và hiệu quả.\r\nChất liệu da ECCO cao cấp, xử lý theo công nghệ ECCO DriTan™ ưu việt, thân thiện với môi trường \r\nDây giày bằng vải dệt dễ dàng điều chỉnh, để vừa vặn với phom bàn chân \r\nCông nghệ đế đúc trực tiếp ECCO FLUIDFORM ™ tạo ra khuôn đế tiên tiến, vừa vặn, êm ái, thoải mái \r\nĐế ngoài sử dụng công nghệ ECCO TRAYTECH ™ tạo độ bám và sự ổn định cho đôi chân khi di chuyển, kết hợp hiệu ứng màu đốm tạo phong cách hiện đại.', 10, 1, '2024-05-09 10:36:19', '2024-05-09 14:34:28'),
(9, 'ECCO ASTIR LITE M', '/images/products/sneaker_1.png', 3861000, 'ECCO ASTIR là mẫu giày thể thao cao cấp, đại diện cho phong cách street-style hiện đại, sở hữu nét đẹp thể thao khỏe khoắn và độc đáo, được tạo nên từ mũ da cao cấp, trọng lượng cực nhẹ, kết hợp cùng bộ đệm êm ái, giúp tăng sự thoải mái và ổn định từ phần gót chân đến mũi chân. Đường khâu thông minh, chạm nổi nghệ thuật tạo cho đôi giày một vẻ ngoài thu hút, khiến bạn muốn phối chung với mọi phong cách.\r\nĐược chế tác từ da full-grain cao cấp kết hợp với da nubuck được sản xuất tại xưởng thuộc da độc quyền của ECCO\r\nLớp lót được dệt thủ công tạo sự mềm mại và thoáng khí, có thể tháo rời\r\nĐế bọc da, có thể tháo rời, tăng thêm sự thoải mái cho bàn chân khi vận động.', 10, 1, '2024-05-09 14:36:16', '2024-05-09 14:36:16'),
(10, 'ECCO STREET 720 M', '/images/products/sneaker_2.png', 4861000, 'ECCO ASTIR là mẫu giày thể thao cao cấp, đại diện cho phong cách street-style hiện đại, sở hữu nét đẹp thể thao khỏe khoắn và độc đáo, được tạo nên từ mũ da cao cấp, trọng lượng cực nhẹ, kết hợp cùng bộ đệm êm ái, giúp tăng sự thoải mái và ổn định từ phần gót chân đến mũi chân. Đường khâu thông minh, chạm nổi nghệ thuật tạo cho đôi giày một vẻ ngoài thu hút, khiến bạn muốn phối chung với mọi phong cách.\r\nĐược chế tác từ da full-grain cao cấp kết hợp với da nubuck được sản xuất tại xưởng thuộc da độc quyền của ECCO\r\nLớp lót được dệt thủ công tạo sự mềm mại và thoáng khí, có thể tháo rời\r\nĐế bọc da, có thể tháo rời, tăng thêm sự thoải mái cho bàn chân khi vận động.', 10, 1, '2024-05-09 14:38:17', '2024-05-09 14:38:17'),
(11, 'ECCO SOFT 7 E', '/images/products/sneaker_3.png', 6800000, 'Mẫu giày sneaker ECCO STREET LITE là bước cải tiến trên dòng giày thể thao Retro cổ điển. Thiết kế tạo nên sự cân bằng hoàn hảo giữa phong cách và tính linh hoạt, dễ dàng phối hợp với hầu hết các loại trang phục. Với kiểu dáng giản dị, gọn gàng, đôi giày sneaker nhẹ này mang đến cho bạn sự thoải mái vượt trội.\r\nMũ giày bằng da ECCO cao cấp hoặc da Suede\r\nDây giày dễ dàng điều chỉnh, tạo nên sự vừa vặn tối đa\r\nLớp lót bằng vải dệt kim cao cấp, sang trọng\r\nĐế ngoài có các rãnh, tạo độ bám và sự ổn định vượt trội.', 20, 1, '2024-05-09 14:39:04', '2024-05-09 14:39:04'),
(12, 'ECCO MX M', '/images/products/sneaker_4.png', 5450000, 'Bộ sưu tập giày Outdoor tinh tế và lôi cuốn, ECCO MX được định hình trên khuôn đế chắc chắn, lấy cảm hứng từ dòng xe mô tô mạnh mẽ, giúp tăng độ bám và tính ổn định. Sự kết hợp tổng thể giữa đế giày và thiết kế tạo nên một phong cách rất đường phố. \r\nChất liệu Vải dệt cao cấp \r\nMũ giày kết hợp lớp màng bảo vệ GORE-TEX chống thấm nước 100%\r\nCấu trúc co giãn tạo cảm giác thoải mái và vừa vặn. \r\nCác lớp da bao phủ dọc hai bên và tấm chắn là điểm nhấn của thiết kế sản phẩm \r\nRuy băng phản quang giúp tăng cường khả năng hiển thị\r\nĐế ngoài được làm bằng vật liệu PU/TPU đúc trực tiếp theo công nghệ ECCO FLUIDFORM™ mang đến sự linh hoạt, nhẹ và bền.', 10, 1, '2024-05-09 14:40:07', '2024-05-09 14:40:07'),
(13, 'ECCO MX M', '/images/products/sneaker_5.png', 6900000, 'Bộ sưu tập giày Outdoor tinh tế và lôi cuốn, ECCO MX được định hình trên khuôn đế chắc chắn, lấy cảm hứng từ dòng xe mô tô mạnh mẽ, giúp tăng độ bám và tính ổn định. Sự kết hợp tổng thể giữa đế giày và thiết kế tạo nên một phong cách rất đường phố. \r\nChất liệu Vải dệt cao cấp \r\nMũ giày kết hợp lớp màng bảo vệ GORE-TEX chống thấm nước 100%\r\nCấu trúc co giãn tạo cảm giác thoải mái và vừa vặn. \r\nCác lớp da bao phủ dọc hai bên và tấm chắn là điểm nhấn của thiết kế sản phẩm \r\nRuy băng phản quang giúp tăng cường khả năng hiển thị\r\nĐế ngoài được làm bằng vật liệu PU/TPU đúc trực tiếp theo công nghệ ECCO FLUIDFORM™ mang đến sự linh hoạt, nhẹ và bền.', 10, 1, '2024-05-09 14:41:26', '2024-05-09 14:41:26'),
(14, 'ECCO MX LE', '/images/products/sneaker_6.png', 7450000, 'Bộ sưu tập giày Outdoor tinh tế và lôi cuốn, ECCO MX được định hình trên khuôn đế chắc chắn, lấy cảm hứng từ dòng xe mô tô mạnh mẽ, giúp tăng độ bám và tính ổn định. Sự kết hợp tổng thể giữa đế giày và thiết kế tạo nên một phong cách rất đường phố. \r\nChất liệu Vải dệt cao cấp \r\nMũ giày kết hợp lớp màng bảo vệ GORE-TEX chống thấm nước 100%\r\nCấu trúc co giãn tạo cảm giác thoải mái và vừa vặn. \r\nCác lớp da bao phủ dọc hai bên và tấm chắn là điểm nhấn của thiết kế sản phẩm \r\nRuy băng phản quang giúp tăng cường khả năng hiển thị\r\nĐế ngoài được làm bằng vật liệu PU/TPU đúc trực tiếp theo công nghệ ECCO FLUIDFORM™ mang đến sự linh hoạt, nhẹ và bền.', 30, 1, '2024-05-09 14:42:00', '2024-05-09 14:42:00'),
(15, 'ECCO MX K', '/images/products/sneaker_8.png', 4500000, 'Bộ sưu tập giày Outdoor tinh tế và lôi cuốn, ECCO MX được định hình trên khuôn đế chắc chắn, lấy cảm hứng từ dòng xe mô tô mạnh mẽ, giúp tăng độ bám và tính ổn định. Sự kết hợp tổng thể giữa đế giày và thiết kế tạo nên một phong cách rất đường phố. \r\nChất liệu Vải dệt cao cấp \r\nMũ giày kết hợp lớp màng bảo vệ GORE-TEX chống thấm nước 100%\r\nCấu trúc co giãn tạo cảm giác thoải mái và vừa vặn. \r\nCác lớp da bao phủ dọc hai bên và tấm chắn là điểm nhấn của thiết kế sản phẩm \r\nRuy băng phản quang giúp tăng cường khả năng hiển thị\r\nĐế ngoài được làm bằng vật liệu PU/TPU đúc trực tiếp theo công nghệ ECCO FLUIDFORM™ mang đến sự linh hoạt, nhẹ và bền.', 10, 1, '2024-05-09 14:42:34', '2024-05-09 14:42:34'),
(16, 'ECCO METROPOLE LONDON M', '/images/products/sneaker_21.png', 7000000, 'MÔ TẢ\r\nECCO METROPOLE LONDON là mẫu giày tây công sở hoàn hảo, đảm bảo thoải mái và êm ái khi di chuyển. Thiết kế nổi bật của kiểu giày Tây Derby sang trọng, tinh tế từ chất liệu da Nubuck mềm mịn tạo nên vẻ ngoài lịch lãm, đôi giày còn mang lại sự thoải mái vượt trội nhờ đệm lót PHORENE™ kết hợp công nghệ đế ECCO FLUIDFORM™.\r\nChất liệu da ECCO cao cấp\r\nĐệm lót bằng vật liệu ECCO PHORENE™ mềm mại, có thể tháo rời, mang lại cảm giác vừa vặn vượt trội\r\nLớp lót bằng vài dệt kim, kết hợp cổ giày da êm ái\r\nCông nghệ đế đúc trực tiếp ECCO FLUIDFORM ™ tạo ra khuôn đế tiên tiến, vừa vặn, êm ái, thoải mái.', 5, 2, '2024-05-09 14:44:52', '2024-05-09 14:44:59'),
(17, 'ECCO MX MX', '/images/products/sneaker_13.png', 6560000, 'Bộ sưu tập giày Outdoor tinh tế và lôi cuốn, ECCO MX được định hình trên khuôn đế chắc chắn, lấy cảm hứng từ dòng xe mô tô mạnh mẽ, giúp tăng độ bám và tính ổn định. Sự kết hợp tổng thể giữa đế giày và thiết kế tạo nên một phong cách rất đường phố. \r\nChất liệu Vải dệt cao cấp \r\nMũ giày kết hợp lớp màng bảo vệ GORE-TEX chống thấm nước 100%\r\nCấu trúc co giãn tạo cảm giác thoải mái và vừa vặn. \r\nCác lớp da bao phủ dọc hai bên và tấm chắn là điểm nhấn của thiết kế sản phẩm \r\nRuy băng phản quang giúp tăng cường khả năng hiển thị\r\nĐế ngoài được làm bằng vật liệu PU/TPU đúc trực tiếp theo công nghệ ECCO FLUIDFORM™ mang đến sự linh hoạt, nhẹ và bền.', 10, 1, '2024-05-09 14:50:14', '2024-05-09 14:50:14'),
(18, 'ECCO OFFROAD M', '/images/products/sadal_1.png', 4491000, 'ECCO OFFROAD - CẢM NHẬN SỰ THOẢI MÁI TRONG MỌI HOẠT ĐỘNG\r\nĐược thiết kế dành riêng cho những hoạt động ngoài trời, đôi xăng đan có kiểu dáng tối giản này được tạo nên từ những miếng da dẻo dai, chắc chắn, mang lại sự vừa vặn tuyệt vời cho đôi chân nhờ tích hợp công nghệ RECEPTOR® hiện đại, đồng thời cung cấp độ bám tốt nhất trên mọi địa hình.\r\n\r\nMũ giày được làm bằng da Nubuck cao cấp, thiết kế thông minh bằng quai dán từ 3 phía tiện dụng cùng lớp lót co dãn tạo cảm giác mềm mại, vừa vặn và thoải mái\r\nĐế trong sử dụng công nghệ đúc EVA nguyên khối, phủ vải tổng hợp tạo cảm giác nhẹ nhàng\r\nĐế giữa phun PU trực tiếp mang đến sự linh hoạt, hỗ trợ đôi chân cho ngày dài năng động\r\nĐế ngoài cao su bền bỉ tạo độ bám vững chắc trên mọi địa hình\r\nCông nghệ RECEPTOR® tạo cảm giác vững vàng tuyệt đối.', 10, 4, '2024-05-10 14:24:25', '2024-05-10 14:24:25'),
(19, 'ECCO OFFROAD MX', '/images/products/sadal_3.png', 2500000, 'ECCO OFFROAD - CẢM NHẬN SỰ THOẢI MÁI TRONG MỌI HOẠT ĐỘNG\r\nĐược thiết kế dành riêng cho những hoạt động ngoài trời, đôi xăng đan có kiểu dáng tối giản này được tạo nên từ những miếng da dẻo dai, chắc chắn, mang lại sự vừa vặn tuyệt vời cho đôi chân nhờ tích hợp công nghệ RECEPTOR® hiện đại, đồng thời cung cấp độ bám tốt nhất trên mọi địa hình.\r\n\r\nMũ giày được làm bằng da Nubuck cao cấp, thiết kế thông minh bằng quai dán từ 3 phía tiện dụng cùng lớp lót co dãn tạo cảm giác mềm mại, vừa vặn và thoải mái\r\nĐế trong sử dụng công nghệ đúc EVA nguyên khối, phủ vải tổng hợp tạo cảm giác nhẹ nhàng\r\nĐế giữa phun PU trực tiếp mang đến sự linh hoạt, hỗ trợ đôi chân cho ngày dài năng động\r\nĐế ngoài cao su bền bỉ tạo độ bám vững chắc trên mọi địa hình\r\nCông nghệ RECEPTOR® tạo cảm giác vững vàng tuyệt đối.', 10, 4, '2024-05-10 14:24:52', '2024-05-10 14:24:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `rates`
--

CREATE TABLE `rates` (
  `id` int(11) NOT NULL,
  `ProductId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `star` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230908053145-create-user.js'),
('20230908054238-create-role.js'),
('20230909134515-create-product.js'),
('20230909135346-create-category.js'),
('20230915134636-create-order.js'),
('20230915141039-create-order-product.js'),
('20230922131308-create-rate.js'),
('20230924141132-create-order.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `RoleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `phone`, `RoleId`, `createdAt`, `updatedAt`) VALUES
(1, 'Phan Tiến Huy', 'huyphan1232002@gmail.com', 'phantienhuy', '$2b$10$31Oi3trt5JK5luQTSprmzuePiVipDC5MHTdeHUwK2Ettpsy16qipq', '0986538387', 2, '2024-04-27 07:56:15', '2024-04-27 07:56:15'),
(2, 'Admin', 'admin@gmail.com', 'admin', '$2b$10$16EE6URi28n0.eor1n.jAOVMroP.VxKavp.3SnBOmdmWvTpcroliu', '0375164533', 1, '2024-04-28 13:49:00', '2024-04-28 13:49:00'),
(3, 'Nguyễn Hữu Toàn', 'khanhmao2002@gmail.com', 'nguyenhuutoan', '$2b$10$q8o1kRN.Rb8XF0E7qAVKru8Tf1ABEgzok.x/cDa3O3JftO0kDDIem', '0375164536', 2, '2024-04-30 03:17:49', '2024-04-30 03:17:49'),
(4, 'Nguyễn Hữu Toàn', 'khanhmao20022@gmail.com', 'nguyenhuutoann', '$2b$10$ZpHPY2urHP4eci9L5Vbp0.mhj85KDIGKYru0Jl/ezc/bSwCEz4VLy', '0375164537', 2, '2024-04-30 03:21:16', '2024-04-30 03:21:16'),
(5, 'Nguyễn Đức Triệu', 'trieu@gmail.com', 'nguyenductrieu', '$2b$10$vsASd7OaVswDqMGqYqKWk./Kq/5TfSvKN6.ppkOLsm2ul5TRf5ukq', '0336978807', 2, '2024-05-11 00:45:55', '2024-05-11 00:45:55');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `rates`
--
ALTER TABLE `rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
