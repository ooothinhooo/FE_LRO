const courses = [
  // { name: "", key: "", weight: 999 },
  {
    name: "CTU",
    key: "CTU",
    weight: 999
  },
  {
    name: "CIT",
    key: "CIT",
    weight: 999
  },
  {
    name: "LRO",
    key: "LRO",
    weight: 999
  },
  {
    name: "Thử Nghiệm OCIT",
    key: "CT999",
    weight: 999
  },
  {
    name: "Toán cao cấp",
    key: "AQ059",
    weight: 3
  },
  {
    name: "Tiếng Anh Nuôi trồng thủy sản 1",
    key: "AQ101",
    weight: 2
  },
  {
    name: "Vi sinh",
    key: "AQ205C",
    weight: 3
  },
  {
    name: "Sinh thái học đại cương",
    key: "AQ210",
    weight: 2
  },
  {
    name: "Sinh lý động vật thủy sản",
    key: "AQ211",
    weight: 3
  },
  {
    name: "Dinh dưỡng động vật thủy sản",
    key: "AQ212",
    weight: 3
  },
  {
    name: "Phương pháp nghiên cứu khoa học",
    key: "AQ216",
    weight: 2
  },
  {
    name: "Kỹ thuật phân tích chất lượng nước",
    key: "AQ218",
    weight: 3,
  },
  {
    name: "Quản lý trại giống cá",
    key: "AQ222",
    weight: 3
  },
  {
    name: "Quản lý trại giống giáp xác và nhuyễn thể",
    key: "AQ223",
    weight: 3,
  },
  {
    name: "Thiết bị và công trình thủy sản",
    key: "AQ224",
    weight: 2
  },
  {
    name: "Kỹ thuật nuôi thủy sản",
    key: "AQ301",
    weight: 4
  },
  {
    name: "Bệnh thủy sản",
    key: "AQ306C",
    weight: 3
  },
  {
    name: "Cải tiến di truyền và quản lý nguồn lợi",
    key: "AQ307",
    weight: 3,
  },
  {
    name: "Thiết bị và công trình thủy sản",
    key: "AQ309",
    weight: 3
  },
  {
    name: "Sản xuất thức ăn tươi sống",
    key: "AQ310",
    weight: 2
  },
  {
    name: "Quy hoạch phát triển thủy sản",
    key: "AQ311",
    weight: 2
  },
  {
    name: "Kinh tế thủy sản",
    key: "AQ312C",
    weight: 3
  },
  {
    name: "Luật thủy sản",
    key: "AQ313",
    weight: 2
  },
  {
    name: "Khuyến nông",
    key: "AQ314",
    weight: 2
  },
  {
    name: "Thuyết trình",
    key: "AQ315",
    weight: 1
  },
  {
    name: "Thực tập thực tế",
    key: "AQ316",
    weight: 3
  },
  {
    name: "Sinh hóa 1",
    key: "BC461C",
    weight: 3
  },
  {
    name: "Sinh học đại cương 1",
    key: "BS110C",
    weight: 3
  },
  {
    name: "Thực hành sinh học đại cương 1",
    key: "BS210C",
    weight: 1
  },
  {
    name: "Toán cao cấp",
    key: "BT200",
    weight: 3
  },
  {
    name: "Di truyền học cơ bản",
    key: "BT202",
    weight: 3
  },
  {
    name: "Thực tập Di truyền học cơ bản",
    key: "BT203",
    weight: 1
  },
  {
    name: "Công nghệ sinh học trong y dược",
    key: "BT218",
    weight: 2
  },
  {
    name: "Công nghệ sinh học trong môi trường",
    key: "BT219",
    weight: 2,
  },
  {
    name: "Công nghệ sinh học thực phẩm",
    key: "BT220",
    weight: 2
  },
  {
    name: "Thực hành hóa học đại cương",
    key: "BT224",
    weight: 1
  },
  {
    name: "Hóa học đại cương",
    key: "BT227",
    weight: 3
  },
  {
    name: "Thực hành Sinh hóa 1",
    key: "BT230",
    weight: 1
  },
  {
    name: "Chuyên đề công nghệ sinh học 5",
    key: "BT299C",
    weight: 2
  },
  {
    name: "Bộ gen và ứng dụng",
    key: "BT301C",
    weight: 3
  },
  {
    name: "Sinh học phân tử",
    key: "BT302",
    weight: 3
  },
  {
    name: "TT. Bộ gen và ứng dụng",
    key: "BT302C",
    weight: 1
  },
  {
    name: "Thực tập Sinh học phân tử",
    key: "BT303",
    weight: 1
  },
  {
    name: "Tin sinh học",
    key: "BT303C",
    weight: 3
  },
  {
    name: "Công nghệ lên men thực phẩm",
    key: "BT304C",
    weight: 2
  },
  {
    name: "Nuôi cấy mô tế bào thực vật",
    key: "BT305C",
    weight: 2
  },
  {
    name: "Đa dạng sinh học",
    key: "BT313",
    weight: 2
  },
  {
    name: "TT. Công nghệ lên men thực phẩm",
    key: "BT404C",
    weight: 1
  },
  {
    name: "TT. Nuôi cấy mô tế bào thực vật",
    key: "BT405C",
    weight: 1
  },
  {
    name: "Luận văn tốt nghiệp",
    key: "BT499C",
    weight: 10
  },
  {
    name: "Khí tượng thủy văn",
    key: "CN004",
    weight: 2
  },
  {
    name: "Kỹ thuật cơ khí đại cương",
    key: "CN008",
    weight: 2
  },
  {
    name: "Cơ khí nông nghiệp đại cương",
    key: "CN097",
    weight: 2
  },
  {
    name: "Nhập môn kỹ thuật",
    key: "CN100",
    weight: 2
  },
  {
    name: "Cơ lý thuyết",
    key: "CN101",
    weight: 2
  },
  {
    name: "Địa chất công trình",
    key: "CN102",
    weight: 2
  },
  {
    name: "Vật liệu xây dựng",
    key: "CN104",
    weight: 2
  },
  {
    name: "TT. Vật liệu xây dựng",
    key: "CN105",
    weight: 1
  },
  {
    name: "Sức bền vật liệu - XD",
    key: "CN106",
    weight: 3
  },
  {
    name: "Cơ học lưu chất",
    key: "CN108",
    weight: 2
  },
  {
    name: "TT. Cơ học lưu chất",
    key: "CN109",
    weight: 1
  },
  {
    name: "Trắc địa",
    key: "CN110",
    weight: 2
  },
  {
    name: "TT. Trắc địa",
    key: "CN111",
    weight: 1
  },
  {
    name: "TT. Cơ học đất",
    key: "CN113",
    weight: 1
  },
  {
    name: "Kỹ thuật điện - XD",
    key: "CN116",
    weight: 2
  },
  {
    name: "Phương pháp tính - Kỹ thuật",
    key: "CN117",
    weight: 2
  },
  {
    name: "Nguyên lý quy hoạch",
    key: "CN119",
    weight: 2
  },
  {
    name: "Bản đồ học và GIS",
    key: "CN122",
    weight: 2
  },
  {
    name: "Kết cấu bê-tông cơ sở",
    key: "CN123",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn xây dựng",
    key: "CN126",
    weight: 2
  },
  {
    name: "Nền móng cơ sở",
    key: "CN127",
    weight: 2
  },
  {
    name: "Kỹ thuật điện",
    key: "CN128",
    weight: 2
  },
  {
    name: "Kỹ thuật điện tử - CN",
    key: "CN129",
    weight: 2
  },
  {
    name: "Hình hoạ và vẽ kỹ thuật - XD",
    key: "CN131",
    weight: 3
  },
  {
    name: "Hình họa và vẽ kỹ thuật - CK",
    key: "CN132",
    weight: 3
  },
  {
    name: "Vận trù học",
    key: "CN135",
    weight: 2
  },
  {
    name: "Cơ lý thuyết - CK",
    key: "CN136",
    weight: 3
  },
  {
    name: "Sức bền vật liệu - CK",
    key: "CN137",
    weight: 3
  },
  {
    name: "Dung sai và kỹ thuật đo",
    key: "CN138",
    weight: 2
  },
  {
    name: "Nhiệt động lực học và truyền nhiệt",
    key: "CN139",
    weight: 3,
  },
  {
    name: "Cơ học máy",
    key: "CN142",
    weight: 3
  },
  {
    name: "Cơ sở thiết kế máy",
    key: "CN145",
    weight: 3
  },
  {
    name: "Vật liệu cơ khí và nhiệt luyện",
    key: "CN147",
    weight: 2
  },
  {
    name: "Thiết kế kỹ thuật",
    key: "CN148",
    weight: 2
  },
  {
    name: "Truyền động thủy lực và khí nén",
    key: "CN149",
    weight: 2
  },
  {
    name: "Phương pháp phần tử hữu hạn",
    key: "CN150",
    weight: 2
  },
  {
    name: "Kỹ thuật số",
    key: "CN151",
    weight: 2
  },
  {
    name: "Phương pháp thí nghiệm và xử lý số liệu",
    key: "CN152",
    weight: 2,
  },
  {
    name: "Cơ học kết cấu",
    key: "CN154",
    weight: 3
  },
  {
    name: "Khoa học về an toàn và bảo hộ lao động",
    key: "CN155",
    weight: 2,
  },
  {
    name: "Anh văn chuyên môn Cơ khí",
    key: "CN156",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn Quản lý công nghiệp",
    key: "CN157",
    weight: 2,
  },
  {
    name: "Anh văn chuyên môn - Kỹ thuật điện",
    key: "CN158",
    weight: 2,
  },
  {
    name: "Anh văn chuyên môn - Cơ điện tử",
    key: "CN159",
    weight: 2
  },
  {
    name: "TT. Công nghệ kim loại cơ bản",
    key: "CN162",
    weight: 3
  },
  {
    name: "Anh văn chuyên môn Công nghệ hóa học",
    key: "CN166",
    weight: 2,
  },
  {
    name: "Mạch điện 1",
    key: "CN167",
    weight: 3
  },
  {
    name: "TT. Mạch điện",
    key: "CN169",
    weight: 1
  },
  {
    name: "An toàn điện",
    key: "CN177",
    weight: 2
  },
  {
    name: "TT. Vật liệu xây dựng - CĐ",
    key: "CN179",
    weight: 1
  },
  {
    name: "Quy hoạch hệ thống điện",
    key: "CN185",
    weight: 2
  },
  {
    name: "Cơ học lưu chất - CK",
    key: "CN189",
    weight: 2
  },
  {
    name: "Mạch điện 2",
    key: "CN191",
    weight: 2
  },
  {
    name: "Đồ án kiến trúc",
    key: "CN194",
    weight: 2
  },
  {
    name: "Đồ án cơ sở thiết kế máy",
    key: "CN195",
    weight: 2
  },
  {
    name: "Đồ án thiết kế và chế tạo sản phẩm CNHH",
    key: "CN197",
    weight: 2,
  },
  {
    name: "Điều khiển quá trình - CNHH",
    key: "CN198",
    weight: 2
  },
  {
    name: "Hóa học và hóa lý polymer",
    key: "CN199",
    weight: 3
  },
  {
    name: "Quản lý dự án công nghiệp",
    key: "CN201",
    weight: 2
  },
  {
    name: "Kỹ thuật dự báo trong công nghiệp",
    key: "CN203",
    weight: 2,
  },
  {
    name: "Quản lý kỹ thuật và công nghệ",
    key: "CN204",
    weight: 2
  },
  {
    name: "Thiết kế vị trí và mặt bằng HTCN",
    key: "CN206",
    weight: 2
  },
  {
    name: "Vận trù học 1 - QLCN",
    key: "CN208",
    weight: 3
  },
  {
    name: "Vận trù học 2 - QLCN",
    key: "CN209",
    weight: 2
  },
  {
    name: "Tin học ứng dụng - QLCN",
    key: "CN211",
    weight: 2
  },
  {
    name: "Kỹ thuật hệ thống",
    key: "CN212",
    weight: 2
  },
  {
    name: "Mô hình hóa và mô phỏng HTCN",
    key: "CN218",
    weight: 2
  },
  {
    name: "Thực tập ngành nghề - QLCN",
    key: "CN220",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - QLCN",
    key: "CN225",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - QLCN",
    key: "CN226",
    weight: 10
  },
  {
    name: "Cơ sở thiết kế nhà máy hóa chất",
    key: "CN229",
    weight: 2
  },
  {
    name: "Kỹ thuật phản Ứng",
    key: "CN231",
    weight: 3
  },
  {
    name: "Thiết bị cơ lưu chất và cơ vật liệu rời",
    key: "CN232",
    weight: 3,
  },
  {
    name: "TT. Quá trình và thiết bị CNHH",
    key: "CN233",
    weight: 2
  },
  {
    name: "Kỹ thuật xúc tác",
    key: "CN236",
    weight: 2
  },
  {
    name: "Tổng hợp hữu cơ hóa dầu",
    key: "CN238",
    weight: 2
  },
  {
    name: "Công nghệ các chất hoạt động bề mặt",
    key: "CN239",
    weight: 2,
  },
  {
    name: "Thực tập ngành nghề - CNHH",
    key: "CN240",
    weight: 2
  },
  {
    name: "Hóa học và hóa lý Polymer",
    key: "CN241",
    weight: 2
  },
  {
    name: "Kỹ thuật sản xuất chất dẻo",
    key: "CN242",
    weight: 2
  },
  {
    name: "Kỹ thuật gia công polymer",
    key: "CN244",
    weight: 2
  },
  {
    name: "Hóa học chất kích thích và BVTV",
    key: "CN247",
    weight: 2
  },
  {
    name: "Kỹ thuật sản xuất bột cellulose và giấy",
    key: "CN248",
    weight: 2,
  },
  {
    name: "Công nghệ sản xuất các hợp chất vô cơ",
    key: "CN249",
    weight: 2,
  },
  {
    name: "Kỹ thuật sản xuất chất kết dính",
    key: "CN251",
    weight: 2
  },
  {
    name: "Kỹ thuật sản xuất thủy tinh",
    key: "CN253",
    weight: 2
  },
  {
    name: "Dụng cụ đo",
    key: "CN255",
    weight: 2
  },
  {
    name: "Công nghệ điện hóa",
    key: "CN259",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp -CNHH",
    key: "CN261",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - CNHH",
    key: "CN262",
    weight: 10
  },
  {
    name: "Kỹ thuật cao Áp",
    key: "CN263",
    weight: 2
  },
  {
    name: "TT. Chuyên ngành kỹ thuật điện",
    key: "CN269",
    weight: 2
  },
  {
    name: "Tin học ứng dụng - kỹ thuật điện",
    key: "CN271",
    weight: 2
  },
  {
    name: "Khí cụ điện",
    key: "CN272",
    weight: 2
  },
  {
    name: "Kỹ thuật chiếu sáng",
    key: "CN273",
    weight: 2
  },
  {
    name: "Cung cấp điện",
    key: "CN274",
    weight: 2
  },
  {
    name: "Nhà máy điện",
    key: "CN275",
    weight: 2
  },
  {
    name: "Vận hành và điều khiển hệ thống điện",
    key: "CN277",
    weight: 2,
  },
  {
    name: "Kỹ thuật điện lạnh",
    key: "CN278",
    weight: 2
  },
  {
    name: "Thiết kế hệ thống điện",
    key: "CN279",
    weight: 2
  },
  {
    name: "Đánh giá độ tin cậy của hệ thống điện",
    key: "CN284",
    weight: 2,
  },
  {
    name: "Tiểu luận tốt nghiệp - KT Điện",
    key: "CN285",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - KT. Điện",
    key: "CN286",
    weight: 10
  },
  {
    name: "Tối ưu hóa và quy hoạch tuyến tính",
    key: "CN297",
    weight: 2,
  },
  {
    name: "Mạng công nghiệp và truyền thông",
    key: "CN298",
    weight: 2
  },
  {
    name: "Nhiên liệu sinh học và nhiên liệu tái tạo",
    key: "CN300",
    weight: 2,
  },
  {
    name: "Thủy văn công trình",
    key: "CN301",
    weight: 2
  },
  {
    name: "Kết cấu thép",
    key: "CN305",
    weight: 2
  },
  {
    name: "Cấp thoát nước",
    key: "CN307",
    weight: 2
  },
  {
    name: "Máy xây dựng và kỹ thuật thi công",
    key: "CN311",
    weight: 3,
  },
  {
    name: "Công trình giao thông",
    key: "CN314",
    weight: 2
  },
  {
    name: "Thủy công",
    key: "CN315",
    weight: 3
  },
  {
    name: "Thực tập ngành nghề - TC",
    key: "CN320",
    weight: 2
  },
  {
    name: "Thí nghiệm công trình",
    key: "CN321",
    weight: 1
  },
  {
    name: "Cấu kiện bê-tông đặc biệt",
    key: "CN322",
    weight: 2
  },
  {
    name: "Công trình ven biển",
    key: "CN325",
    weight: 2
  },
  {
    name: "Kết cấu thép nhà công nghiệp",
    key: "CN328",
    weight: 2
  },
  {
    name: "Tin học ứng dụng - Kỹ thuật 1",
    key: "CN331",
    weight: 2
  },
  {
    name: "Tin học ứng dụng - Kỹ thuật 2",
    key: "CN332",
    weight: 2
  },
  {
    name: "Quy hoạch đô thị",
    key: "CN335",
    weight: 2
  },
  {
    name: "Luật xây dựng",
    key: "CN337",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - TC",
    key: "CN339",
    weight: 10
  },
  {
    name: "Quản lý sản xuất công nghiệp",
    key: "CN340",
    weight: 3
  },
  {
    name: "Matlab và Labview",
    key: "CN341",
    weight: 3
  },
  {
    name: "Đàn hồi ứng dụng và phương pháp phần tử hữu hạn",
    key: "CN343",
    weight: 3,
  },
  {
    name: "Bệnh học công trình",
    key: "CN344",
    weight: 2
  },
  {
    name: "Giải pháp nền móng hợp lý",
    key: "CN346",
    weight: 2
  },
  {
    name: "Nhà nhiều tầng",
    key: "CN347",
    weight: 2
  },
  {
    name: "Tin học trong quản lý dự Án xây dựng",
    key: "CN348",
    weight: 2,
  },
  {
    name: "Kết cấu bê-tông công trình dân dụng",
    key: "CN349",
    weight: 2,
  },
  {
    name: "Tiểu luận tốt nghiệp - XDDD",
    key: "CN357",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - XDDD",
    key: "CN358",
    weight: 10
  },
  {
    name: "Thi công cầu",
    key: "CN366",
    weight: 2
  },
  {
    name: "Thí nghiệm đường ô tô",
    key: "CN371",
    weight: 1
  },
  {
    name: "Quy hoạch giao thông",
    key: "CN374",
    weight: 2
  },
  {
    name: "Cấu tạo động cơ đốt trong",
    key: "CN379",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - XDCĐ",
    key: "CN384",
    weight: 10
  },
  {
    name: "Ăn mòn kim loại",
    key: "CN385",
    weight: 2
  },
  {
    name: "Công nghệ chế tạo máy 1",
    key: "CN387",
    weight: 3
  },
  {
    name: "Công nghệ chế tạo máy 2",
    key: "CN388",
    weight: 2
  },
  {
    name: "TT. Công nghệ kim loại cơ bản",
    key: "CN389",
    weight: 3
  },
  {
    name: "Công nghệ và thiết bị tạo phôi",
    key: "CN390",
    weight: 2
  },
  {
    name: "Công nghệ chế tạo khuôn mẫu",
    key: "CN391",
    weight: 2
  },
  {
    name: "CAD, CAM, CNC",
    key: "CN392",
    weight: 3
  },
  {
    name: "Các phương pháp gia công đặc biệt",
    key: "CN393",
    weight: 2,
  },
  {
    name: "Tự động hóa sản xuất công nghiệp",
    key: "CN394",
    weight: 2
  },
  {
    name: "TT. Công nghệ kim loại - CTM",
    key: "CN395",
    weight: 4
  },
  {
    name: "Dao động cơ học",
    key: "CN401",
    weight: 2
  },
  {
    name: "Quá trình và thiết bị công nghiệp",
    key: "CN403",
    weight: 2,
  },
  {
    name: "Vật liệu phi kim loại",
    key: "CN405",
    weight: 2
  },
  {
    name: "PLC",
    key: "CN406",
    weight: 2
  },
  {
    name: "Quy hoạch công nghiệp",
    key: "CN407",
    weight: 2
  },
  {
    name: "Quản lý sản xuất công nghiệp",
    key: "CN408",
    weight: 2
  },
  {
    name: "Thiết kế dụng cụ cắt",
    key: "CN411",
    weight: 2
  },
  {
    name: "Tạo mẫu nhanh",
    key: "CN413",
    weight: 2
  },
  {
    name: "Quản lý kỹ thuật bảo trì công nghiệp",
    key: "CN414",
    weight: 2,
  },
  {
    name: "Thiết kế hệ thống cơ điện tử",
    key: "CN416",
    weight: 2
  },
  {
    name: "Công nghệ sản xuất sạch",
    key: "CN419",
    weight: 2
  },
  {
    name: "Công nghệ phục hồi chi tiết máy",
    key: "CN420",
    weight: 2
  },
  {
    name: "Mạng điện",
    key: "CN422",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - CKCTM",
    key: "CN423",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - CKCTM",
    key: "CN424",
    weight: 10
  },
  {
    name: "Vật liệu và công nghệ kim loại",
    key: "CN425",
    weight: 3
  },
  {
    name: "Điện công nghiệp",
    key: "CN442",
    weight: 2
  },
  {
    name: "Máy thu hoạch",
    key: "CN448",
    weight: 2
  },
  {
    name: "Kinh tế kỹ thuật",
    key: "CN449",
    weight: 2
  },
  {
    name: "Trang bị điện và điện tử trên ô tô - máy kéo",
    key: "CN457",
    weight: 3,
  },
  {
    name: "Nền móng công trình - CĐ",
    key: "CN460",
    weight: 2
  },
  {
    name: "Khảo nghiệm và kiểm định ô tô",
    key: "CN463",
    weight: 2
  },
  {
    name: "Kỹ thuật sử dụng và khai thác ôtô",
    key: "CN467",
    weight: 2,
  },
  {
    name: "Công nghệ lắp ráp ô tô",
    key: "CN472",
    weight: 2
  },
  {
    name: "Kỹ thuật nâng chuyển",
    key: "CN473",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp",
    key: "CN474",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp",
    key: "CN475",
    weight: 10
  },
  {
    name: "Tiểu luận tốt nghiệp - Cơ điện tử",
    key: "CN476",
    weight: 4,
  },
  {
    name: "Luận văn tốt nghiệp - Cơ điện tử",
    key: "CN477",
    weight: 10,
  },
  {
    name: "Máy công cụ",
    key: "CN482",
    weight: 2
  },
  {
    name: "Thiết kế trang bị công nghệ",
    key: "CN484",
    weight: 2
  },
  {
    name: "Tin học ứng dụng - CNHH",
    key: "CN488",
    weight: 2
  },
  {
    name: "Đồ án chuyên ngành - CNHH",
    key: "CN490",
    weight: 2
  },
  {
    name: "Đồ án quá trình và thiết bị CNHH",
    key: "CN491",
    weight: 2
  },
  {
    name: "Công nghệ hóa hương liệu",
    key: "CN494",
    weight: 2
  },
  {
    name: "Công nghệ hóa mỹ phẩm",
    key: "CN495",
    weight: 2
  },
  {
    name: "Hóa học chất rắn",
    key: "CN496",
    weight: 2
  },
  {
    name: "Cơ học ứng dụng",
    key: "CN500",
    weight: 3
  },
  {
    name: "Tổ chức thi công - CĐ",
    key: "CN505",
    weight: 2
  },
  {
    name: "Báo cáo chuyên đề - XD",
    key: "CN507",
    weight: 2
  },
  {
    name: "Đồ án thủy lực công trình",
    key: "CN509",
    weight: 2
  },
  {
    name: "Đồ án nền móng công trình",
    key: "CN510",
    weight: 2
  },
  {
    name: "Đồ án thi công công trình thủy lợi",
    key: "CN511",
    weight: 2,
  },
  {
    name: "Đồ án thủy công",
    key: "CN512",
    weight: 2
  },
  {
    name: "Đồ án máy bơm và trạm bơm",
    key: "CN513",
    weight: 2
  },
  {
    name: "Quản lý dự án xây dựng",
    key: "CN514",
    weight: 3
  },
  {
    name: "Đồ án cấp thoát nước",
    key: "CN515",
    weight: 2
  },
  {
    name: "Đồ án thiết kế hệ thống cơ điện tử",
    key: "CN516",
    weight: 2,
  },
  {
    name: "Đồ án hệ thống điện",
    key: "CN518",
    weight: 2
  },
  {
    name: "Báo cáo chuyên đề Kỹ thuật điện",
    key: "CN520",
    weight: 2
  },
  {
    name: "Đồ án kết cấu bê-tông",
    key: "CN521",
    weight: 2
  },
  {
    name: "Đồ án kết cấu thép",
    key: "CN522",
    weight: 2
  },
  {
    name: "Đồ án thi công",
    key: "CN523",
    weight: 2
  },
  {
    name: "Thực tập ngành nghề - XDDD",
    key: "CN524",
    weight: 2
  },
  {
    name: "Đồ án quản lý dự án công nghiệp",
    key: "CN525",
    weight: 2
  },
  {
    name: "Đồ án thiết kế vị trí và mặt bằng",
    key: "CN526",
    weight: 2,
  },
  {
    name: "Đồ án quản lý kỹ thuật bảo trì công nghiệp",
    key: "CN527",
    weight: 2,
  },
  {
    name: "Đồ án mô hình hóa và mô phỏng các hệ thống công nghiệp",
    key: "CN528",
    weight: 2,
  },
  {
    name: "Đồ án công nghệ chế tạo máy",
    key: "CN529",
    weight: 2
  },
  {
    name: "Đồ án máy và thiết bị chế biến",
    key: "CN530",
    weight: 2
  },
  {
    name: "Thi công đường",
    key: "CN532",
    weight: 2
  },
  {
    name: "Đồ án nền móng công trình - CĐ",
    key: "CN534",
    weight: 2
  },
  {
    name: "Đồ án thi công cầu",
    key: "CN537",
    weight: 2
  },
  {
    name: "Đồ án thi công đường",
    key: "CN538",
    weight: 2
  },
  {
    name: "Thực tập ngành nghề - CĐ",
    key: "CN539",
    weight: 2
  },
  {
    name: "Đồ án ô tô",
    key: "CN541",
    weight: 2
  },
  {
    name: "Kinh tế kỹ thuật",
    key: "CN542",
    weight: 3
  },
  {
    name: "Quản trị nguồn nhân lực",
    key: "CN543",
    weight: 3
  },
  {
    name: "Đồ án cơ học máy",
    key: "CN544",
    weight: 2
  },
  {
    name: "Quản lý chất lượng tổng thể",
    key: "CN545",
    weight: 3
  },
  {
    name: "Tin học ứng dụng nâng cao - QLCN",
    key: "CN547",
    weight: 2
  },
  {
    name: "Đo lường và thiết kế công việc",
    key: "CN548",
    weight: 3
  },
  {
    name: "Quản lý vật tư - tồn kho",
    key: "CN549",
    weight: 3
  },
  {
    name: "Quản lý chuỗi cung Ứng và hậu cần",
    key: "CN550",
    weight: 3,
  },
  {
    name: "Kỹ thuật điều độ trong sản xuất và dịch vụ",
    key: "CN551",
    weight: 3,
  },
  {
    name: "Phương pháp nghiên cứu và viết báo cáo khoa học",
    key: "CN552",
    weight: 2,
  },
  {
    name: "Máy và thiết bị chế biến thực phẩm",
    key: "CN553",
    weight: 3,
  },
  {
    name: "Máy và thiết bị chế biến lương thực",
    key: "CN554",
    weight: 3,
  },
  {
    name: "Hệ thống máy và thiết bị lạnh",
    key: "CN555",
    weight: 3
  },
  {
    name: "Truyền khối - CNHH",
    key: "CN561",
    weight: 3
  },
  {
    name: "Hóa lý: Động học và điện hóa học",
    key: "CN562",
    weight: 2
  },
  {
    name: "Thiết kế và phân tích thí nghiệm",
    key: "CN563",
    weight: 3
  },
  {
    name: "Các phương pháp phân tích hiện đại-CNHH",
    key: "CN564",
    weight: 3,
  },
  {
    name: "TT. Các phương pháp phân tích hiện đại-CNHH",
    key: "CN565",
    weight: 1,
  },
  {
    name: "Lý thuyết ô tô",
    key: "CN566",
    weight: 3
  },
  {
    name: "Cấu tạo ô tô máy kéo",
    key: "CN567",
    weight: 3
  },
  {
    name: "Lý thuyết tính toán và thiết kế động cơ đốt trong",
    key: "CN568",
    weight: 3,
  },
  {
    name: "Đồ án thiết kế động cơ đốt trong",
    key: "CN569",
    weight: 2
  },
  {
    name: "Kỹ thuật sửa chữa máy",
    key: "CN570",
    weight: 3
  },
  {
    name: "Thiết kế ô tô",
    key: "CN571",
    weight: 3
  },
  {
    name: "Thực tập trang bị điện, điện tử trên ô tô - máy kéo",
    key: "CN572",
    weight: 2,
  },
  {
    name: "Thực tập sửa chữa động cơ",
    key: "CN573",
    weight: 4
  },
  {
    name: "Thực tập sửa chữa ô tô",
    key: "CN574",
    weight: 3
  },
  {
    name: "Quy hoạch giao thông",
    key: "CN577",
    weight: 3
  },
  {
    name: "Điều khiển logic có thể lập trình (PLC)",
    key: "CN579",
    weight: 3,
  },
  {
    name: "Lý thuyết điều khiển hiện đại",
    key: "CN580",
    weight: 3
  },
  {
    name: "Kỹ thuật vi điều khiển",
    key: "CN581",
    weight: 3
  },
  {
    name: "Cơ cấu chấp hành cơ điện tử",
    key: "CN582",
    weight: 3
  },
  {
    name: "Sinh học phân tử",
    key: "CS102",
    weight: 3
  },
  {
    name: "TT. Sinh học phân tử",
    key: "CS103",
    weight: 1
  },
  {
    name: "Vi sinh học công nghiệp",
    key: "CS104",
    weight: 2
  },
  {
    name: "TT. Vi sinh học công nghiệp",
    key: "CS105",
    weight: 1
  },
  {
    name: "Vi sinh học môi trường",
    key: "CS106",
    weight: 2
  },
  {
    name: "TT. Vi sinh học môi trường",
    key: "CS107",
    weight: 1
  },
  {
    name: "Virus học đại cương",
    key: "CS108",
    weight: 2
  },
  {
    name: "Phương pháp nghiên cứu khoa học - CNSH",
    key: "CS109",
    weight: 2,
  },
  {
    name: "Anh văn chuyên ngành - CNSH",
    key: "CS110",
    weight: 2
  },
  {
    name: "Vi sinh học đại cương B",
    key: "CS111",
    weight: 2
  },
  {
    name: "Vi sinh học đại cương",
    key: "CS112",
    weight: 3
  },
  {
    name: "TT. Vi sinh học đại cương",
    key: "CS113",
    weight: 1
  },
  {
    name: "Sinh hóa",
    key: "CS114",
    weight: 3
  },
  {
    name: "TT. Sinh hóa",
    key: "CS115",
    weight: 1
  },
  {
    name: "Phương pháp phân tích vi sinh vật",
    key: "CS118",
    weight: 2,
  },
  {
    name: "TT. Phương pháp phân tích vi sinh vật",
    key: "CS119",
    weight: 1,
  },
  {
    name: "Cơ sở di truyền học",
    key: "CS124",
    weight: 2
  },
  {
    name: "TT. Cơ sở di truyền học",
    key: "CS125",
    weight: 1
  },
  {
    name: "Kỹ thuật phân tích và thiết bị",
    key: "CS126",
    weight: 2
  },
  {
    name: "TT. Kỹ thuật phân tích và thiết bị",
    key: "CS127",
    weight: 1,
  },
  {
    name: "Chẩn đoán phân tử",
    key: "CS209",
    weight: 2
  },
  {
    name: "TT. Công nghệ di truyền",
    key: "CS211",
    weight: 1
  },
  {
    name: "Công nghệ sinh học trong môi trường",
    key: "CS212",
    weight: 2,
  },
  {
    name: "Vi sinh học y dược",
    key: "CS213",
    weight: 2
  },
  {
    name: "Vi sinh học thực phẩm",
    key: "CS214",
    weight: 2
  },
  {
    name: "TT. Vi sinh học thực phẩm",
    key: "CS215",
    weight: 1
  },
  {
    name: "Nhập môn công nghệ sinh học",
    key: "CS302",
    weight: 2
  },
  {
    name: "An toàn trong thực phẩm và môi trường",
    key: "CS303",
    weight: 2,
  },
  {
    name: "Bộ gen và Ứng dụng",
    key: "CS306",
    weight: 2
  },
  {
    name: "Protein và Enzim học",
    key: "CS311",
    weight: 2
  },
  {
    name: "TT. Protein và Enzim học",
    key: "CS312",
    weight: 1
  },
  {
    name: "Tin sinh học",
    key: "CS313",
    weight: 2
  },
  {
    name: "Nấm học",
    key: "CS316",
    weight: 2
  },
  {
    name: "TT. Nấm học",
    key: "CS317",
    weight: 1
  },
  {
    name: "Lên men thực phẩm",
    key: "CS318",
    weight: 2
  },
  {
    name: "TT. Lên men thực phẩm",
    key: "CS319",
    weight: 1
  },
  {
    name: "Công nghệ di truyền",
    key: "CS320",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - CNSH",
    key: "CS322",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - CNSH",
    key: "CS323",
    weight: 10
  },
  {
    name: "Báo cáo chuyên đề công nghệ sinh học",
    key: "CS326",
    weight: 2,
  },
  {
    name: "Nuôi cấy mô tế bào thực vật và động vật",
    key: "CS327",
    weight: 3,
  },
  {
    name: "TT. Nuôi cấy mô tế bào thực vật và động vật",
    key: "CS328",
    weight: 1,
  },
  {
    name: "Công nghệ sinh học thực phẩm",
    key: "CS329",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - VSV",
    key: "CS341",
    weight: 10
  },
  {
    name: "Chất điều hòa sinh trưởng thực vật",
    key: "CS343",
    weight: 2,
  },
  {
    name: "Công nghệ sinh học trong y dược",
    key: "CS344",
    weight: 2
  },
  {
    name: "Vi sinh vật nông nghiệp",
    key: "CS345",
    weight: 2
  },
  {
    name: "Công nghệ sinh học trong thủy sản",
    key: "CS346",
    weight: 2,
  },
  {
    name: "Vi - Tích phân",
    key: "CT051H",
    weight: 4
  },
  {
    name: "Lập trình căn bản A",
    key: "CT054H",
    weight: 4
  },
  {
    name: "Kỹ năng thuyết trình",
    key: "CT056H",
    weight: 1
  },
  {
    name: "Kỹ năng học đại học",
    key: "CT100",
    weight: 2
  },
  {
    name: "Lập trình căn bản A",
    key: "CT101",
    weight: 4
  },
  {
    name: "Cấu trúc dữ liệu",
    key: "CT103",
    weight: 4
  },
  {
    name: "Nguyên lý hệ điều hành",
    key: "CT104H",
    weight: 3
  },
  {
    name: "Kiến trúc máy tính - Điện tử",
    key: "CT105",
    weight: 2
  },
  {
    name: "Quản trị hệ thống",
    key: "CT105H",
    weight: 3
  },
  {
    name: "Nhập môn công nghệ phần mềm",
    key: "CT107H",
    weight: 3
  },
  {
    name: "Lập trình hướng đối tượng",
    key: "CT108H",
    weight: 3
  },
  {
    name: "Phân tích và thiết kế hệ thống thông tin",
    key: "CT109",
    weight: 3,
  },
  {
    name: "Phân tích và thiết kế thuật toán",
    key: "CT109H",
    weight: 3,
  },
  {
    name: "Cơ sở dữ liệu",
    key: "CT110H",
    weight: 3
  },
  {
    name: "Mạng máy tính",
    key: "CT112",
    weight: 3
  },
  {
    name: "Phân tích và thiết kế hệ thống",
    key: "CT112H",
    weight: 3
  },
  {
    name: "Nhập môn công nghệ phần mềm",
    key: "CT113",
    weight: 2
  },
  {
    name: "Tin học lý thuyết",
    key: "CT121",
    weight: 3
  },
  {
    name: "Phương pháp tính - CNTT",
    key: "CT124",
    weight: 2
  },
  {
    name: "Lý thuyết xếp hàng",
    key: "CT126",
    weight: 2
  },
  {
    name: "Lý thuyết thông tin",
    key: "CT127",
    weight: 2
  },
  {
    name: "Lập trình căn bản - Điện tử",
    key: "CT131",
    weight: 3
  },
  {
    name: "Linh kiện điện tử",
    key: "CT132",
    weight: 2
  },
  {
    name: "Mạch tương tự",
    key: "CT134",
    weight: 3
  },
  {
    name: "TT. Mạch tương tự",
    key: "CT135",
    weight: 1
  },
  {
    name: "Mạch số",
    key: "CT136",
    weight: 3
  },
  {
    name: "Toán kỹ thuật",
    key: "CT138",
    weight: 2
  },
  {
    name: "Lý thuyết tín hiệu và hệ thống",
    key: "CT140",
    weight: 2
  },
  {
    name: "Kỹ thuật vi xử lý",
    key: "CT141",
    weight: 3
  },
  {
    name: "Xử lý tín hiệu số",
    key: "CT144",
    weight: 3
  },
  {
    name: "TT. Xử lý tín hiệu số",
    key: "CT145",
    weight: 1
  },
  {
    name: "Truyền dữ liệu",
    key: "CT146",
    weight: 2
  },
  {
    name: "TT. Truyền dữ liệu",
    key: "CT147",
    weight: 1
  },
  {
    name: "Lý thuyết mạch",
    key: "CT148",
    weight: 3
  },
  {
    name: "Kỹ năng thực hành",
    key: "CT153",
    weight: 1
  },
  {
    name: "TT. Kỹ thuật vi xử lý",
    key: "CT164",
    weight: 1
  },
  {
    name: "TT. Mạch số",
    key: "CT168",
    weight: 1
  },
  {
    name: "Toán rời rạc",
    key: "CT172",
    weight: 4
  },
  {
    name: "Kiến trúc máy tính",
    key: "CT173",
    weight: 3
  },
  {
    name: "Phân tích và thiết kế thuật toán",
    key: "CT174",
    weight: 3
  },
  {
    name: "Lý thuyết đồ thị",
    key: "CT175",
    weight: 3
  },
  {
    name: "Lập trình hướng đối tượng",
    key: "CT176",
    weight: 3
  },
  {
    name: "Cấu trúc dữ liệu",
    key: "CT177",
    weight: 3
  },
  {
    name: "Nguyên lý hệ điều hành",
    key: "CT178",
    weight: 3
  },
  {
    name: "Quản trị hệ thống",
    key: "CT179",
    weight: 3
  },
  {
    name: "Cơ sở dữ liệu",
    key: "CT180",
    weight: 3
  },
  {
    name: "Hệ thống thông tin doanh nghiệp",
    key: "CT181",
    weight: 3
  },
  {
    name: "Ngôn ngữ mô hình hóa",
    key: "CT182",
    weight: 3
  },
  {
    name: "Anh văn chuyên môn công nghệ thông tin 1",
    key: "CT183",
    weight: 3,
  },
  {
    name: "Anh văn chuyên môn công nghệ thông tin 2",
    key: "CT184",
    weight: 3,
  },
  {
    name: "Nền tảng công nghệ thông tin",
    key: "CT187",
    weight: 3
  },
  {
    name: "Nhập môn lập trình Web",
    key: "CT188",
    weight: 3
  },
  {
    name: "Nhập môn trí tuệ nhân tạo",
    key: "CT190",
    weight: 2
  },
  {
    name: "Quy hoạch tuyến tính",
    key: "CT199",
    weight: 3
  },
  {
    name: "Nền tảng công nghệ thông tin",
    key: "CT200",
    weight: 4
  },
  {
    name: "Niên luận cơ sở ngành Khoa học máy tính",
    key: "CT201",
    weight: 3,
  },
  {
    name: "Nguyên lý máy học",
    key: "CT202",
    weight: 3
  },
  {
    name: "Tương tác người máy",
    key: "CT202H",
    weight: 3
  },
  {
    name: "Đồ họa máy tính",
    key: "CT203",
    weight: 3
  },
  {
    name: "Quản lý dự án phần mềm",
    key: "CT203H",
    weight: 3
  },
  {
    name: "An toàn và bảo mật thông tin",
    key: "CT204",
    weight: 3
  },
  {
    name: "Điện toán đám mây",
    key: "CT204H",
    weight: 3
  },
  {
    name: "Quản trị cơ sở dữ liệu",
    key: "CT205",
    weight: 3
  },
  {
    name: "Nguyên lý máy học",
    key: "CT205H",
    weight: 3
  },
  {
    name: "Phát triển phần mềm mã nguồn mở",
    key: "CT207",
    weight: 3
  },
  {
    name: "Niên luận ngành Khoa học máy tính",
    key: "CT208",
    weight: 3,
  },
  {
    name: "Đồ họa nâng cao",
    key: "CT209",
    weight: 3
  },
  {
    name: "Thị giác máy tính",
    key: "CT210",
    weight: 3
  },
  {
    name: "An ninh mạng",
    key: "CT211",
    weight: 3
  },
  {
    name: "Quản trị mạng",
    key: "CT212",
    weight: 3
  },
  {
    name: "Máy học nâng cao",
    key: "CT214",
    weight: 3
  },
  {
    name: "Lập trình Web",
    key: "CT214H",
    weight: 3
  },
  {
    name: "Hệ thống gợi ý",
    key: "CT215",
    weight: 3
  },
  {
    name: "Niên luận cơ sở",
    key: "CT216H",
    weight: 3
  },
  {
    name: "Lập trình mạng",
    key: "CT221",
    weight: 3
  },
  {
    name: "An toàn hệ thống",
    key: "CT222",
    weight: 3
  },
  {
    name: "Quản lý dự Án phần mềm",
    key: "CT223",
    weight: 3
  },
  {
    name: "Lập trình Python",
    key: "CT225",
    weight: 2
  },
  {
    name: "Niên luận cơ sở mạng máy tính và truyền thông",
    key: "CT226",
    weight: 3,
  },
  {
    name: "Kỹ thuật phát hiện tấn công mạng",
    key: "CT227",
    weight: 3
  },
  {
    name: "Tường lửa",
    key: "CT228",
    weight: 3
  },
  {
    name: "Bảo mật website",
    key: "CT229",
    weight: 2
  },
  {
    name: "Điện toán đám mây",
    key: "CT233",
    weight: 3
  },
  {
    name: "Quản trị mạng trên MS Windows",
    key: "CT235",
    weight: 3
  },
  {
    name: "Quản trị cơ sở dữ liệu trên Windows",
    key: "CT236",
    weight: 2,
  },
  {
    name: "Nguyên lý hệ quản trị cơ sở dữ liệu",
    key: "CT237",
    weight: 3,
  },
  {
    name: "Niên luận cơ sở ngành KTPM",
    key: "CT239",
    weight: 3
  },
  {
    name: "Nguyên lý xây dựng phần mềm",
    key: "CT240",
    weight: 3
  },
  {
    name: "Phân tích yêu cầu phần mềm",
    key: "CT241",
    weight: 3
  },
  {
    name: "Kiến trúc và Thiết kế phần mềm",
    key: "CT242",
    weight: 3
  },
  {
    name: "Đảm bảo chất lượng và Kiểm thử phần mềm",
    key: "CT243",
    weight: 4,
  },
  {
    name: "Bảo trì phần mềm",
    key: "CT244",
    weight: 3
  },
  {
    name: "Kiểm Chứng Mô Hình",
    key: "CT287",
    weight: 3
  },
  {
    name: "Tương tác người máy",
    key: "CT245",
    weight: 2
  },
  {
    name: "Lập trình .NET",
    key: "CT246",
    weight: 3
  },
  {
    name: "Phát triển phần mềm tác nghiệp",
    key: "CT249",
    weight: 2
  },
  {
    name: "Niên luận ngành Kỹ thuật phần mềm",
    key: "CT250",
    weight: 3,
  },
  {
    name: "Phát triển ứng dụng trên Windows",
    key: "CT251",
    weight: 3
  },
  {
    name: "Niên luận cơ sở ngành hệ thống thông tin",
    key: "CT252",
    weight: 3,
  },
  {
    name: "Bảo mật, an toàn hệ thống thông tin",
    key: "CT254",
    weight: 3,
  },
  {
    name: "Nghiệp vụ thông minh",
    key: "CT255",
    weight: 3
  },
  {
    name: "Phát triển hệ thống thương mại điện tử",
    key: "CT258",
    weight: 3,
  },
  {
    name: "Niên luận ngành hệ thống thông tin",
    key: "CT263",
    weight: 3,
  },
  {
    name: "Cơ sơ dữ liệu phân tán",
    key: "CT264",
    weight: 2
  },
  {
    name: "Hệ quản trị cơ sở dữ liệu Oracle",
    key: "CT269",
    weight: 2
  },
  {
    name: "Niên luận cơ sở - THƯD",
    key: "CT270",
    weight: 3
  },
  {
    name: "Niên luận cơ sở - CNTT",
    key: "CT271",
    weight: 3
  },
  {
    name: "Thương mại điện tử - CNTT",
    key: "CT272",
    weight: 3
  },
  {
    name: "Giao diện người - máy",
    key: "CT273",
    weight: 3
  },
  {
    name: "Lập trình cho thiết bị di động",
    key: "CT274",
    weight: 3
  },
  {
    name: "Công nghệ Web",
    key: "CT275",
    weight: 3
  },
  {
    name: "Lập trình Java",
    key: "CT276",
    weight: 3
  },
  {
    name: "Lý thuyết thông tin",
    key: "CT292",
    weight: 3
  },
  {
    name: "Mạng và truyền thông dữ liệu",
    key: "CT293",
    weight: 3
  },
  {
    name: "Máy học ứng dụng",
    key: "CT294",
    weight: 3
  },
  {
    name: "Phân tích và thiết kế hệ thống thông tin",
    key: "CT296",
    weight: 3,
  },
  {
    name: "Phát triển hệ thống web",
    key: "CT299",
    weight: 3
  },
  {
    name: "Phát triển phần mềm",
    key: "CT300",
    weight: 3
  },
  {
    name: "An ninh mạng",
    key: "CT301H",
    weight: 3
  },
  {
    name: "Phát triển ứng dụng chuyên nghiệp với .NET",
    key: "CT310H",
    weight: 3,
  },
  {
    name: "Phương pháp Nghiên cứu khoa học",
    key: "CT311",
    weight: 2
  },
  {
    name: "Khai khoáng dữ liệu",
    key: "CT312",
    weight: 3
  },
  {
    name: "Lập trình cho các thiết bị di động",
    key: "CT312H",
    weight: 3,
  },
  {
    name: "Xử lý Ảnh",
    key: "CT316",
    weight: 3
  },
  {
    name: "Trí tuệ nhân tạo",
    key: "CT332",
    weight: 3
  },
  {
    name: "Thiết kế và cài đặt mạng",
    key: "CT335",
    weight: 3
  },
  {
    name: "Mạng không dây và di động",
    key: "CT338",
    weight: 2
  },
  {
    name: "Trường điện từ",
    key: "CT361",
    weight: 2
  },
  {
    name: "Kỹ thuật Anten và truyền sóng",
    key: "CT363",
    weight: 3
  },
  {
    name: "Mạng viễn thông",
    key: "CT372",
    weight: 3
  },
  {
    name: "Điện tử công nghiệp",
    key: "CT376",
    weight: 3
  },
  {
    name: "Lý thuyết điều khiển tự động",
    key: "CT377",
    weight: 3
  },
  {
    name: "Cảm biến và chuyển năng",
    key: "CT378",
    weight: 2
  },
  {
    name: "Kỹ thuật Robot",
    key: "CT380",
    weight: 3
  },
  {
    name: "Điều khiển giám sát và thu thập dữ liệu",
    key: "CT381",
    weight: 2,
  },
  {
    name: "Mạng nơ-ron nhân tạo",
    key: "CT384",
    weight: 3
  },
  {
    name: "Thông tin số",
    key: "CT386",
    weight: 3
  },
  {
    name: "TT. Viễn thông",
    key: "CT390",
    weight: 1
  },
  {
    name: "Cơ sở viễn thông",
    key: "CT391",
    weight: 3
  },
  {
    name: "Chuyên đề Viễn thông",
    key: "CT394",
    weight: 2
  },
  {
    name: "Điện tử công suất và ứng dụng",
    key: "CT395",
    weight: 2
  },
  {
    name: "TT. Điện tử công suất và ứng dụng",
    key: "CT396",
    weight: 1,
  },
  {
    name: "Đo lường và điều khiển bằng máy tính",
    key: "CT397",
    weight: 3,
  },
  {
    name: "Điều khiển mờ",
    key: "CT398",
    weight: 2
  },
  {
    name: "Hệ thống nhúng",
    key: "CT399",
    weight: 3
  },
  {
    name: "Chuyên đề kỹ thuật điều khiển",
    key: "CT400",
    weight: 2
  },
  {
    name: "Kỹ thuật phần cứng máy tính",
    key: "CT404",
    weight: 2
  },
  {
    name: "Chuyên đề Kỹ thuật máy tính",
    key: "CT408",
    weight: 2
  },
  {
    name: "Lập trình nhúng",
    key: "CT409",
    weight: 3
  },
  {
    name: "Tiểu luận tốt nghiệp - KTĐK",
    key: "CT416",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - KTĐK",
    key: "CT417",
    weight: 10
  },
  {
    name: "Thông tin sợi quang",
    key: "CT419",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - ĐTVT",
    key: "CT422",
    weight: 10
  },
  {
    name: "Kỹ thuật truyền số liệu",
    key: "CT423",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - KTMT",
    key: "CT426",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - KTMT",
    key: "CT427",
    weight: 10
  },
  {
    name: "Lập trình Web",
    key: "CT428",
    weight: 3
  },
  {
    name: "Phân tích hệ thống hướng đối tượng",
    key: "CT430",
    weight: 3,
  },
  {
    name: "Niên luận Mạng máy tính và truyền thông",
    key: "CT439",
    weight: 3,
  },
  {
    name: "Đồ Án kỹ thuật điện tử",
    key: "CT441",
    weight: 2
  },
  {
    name: "Phát triển ứng dụng Web",
    key: "CT449",
    weight: 3
  },
  {
    name: "Tiểu luận tốt nghiệp - HTTT",
    key: "CT461",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - TT&MMT",
    key: "CT462",
    weight: 4
  },
  {
    name: "Quản trị dự án Công nghệ thông tin",
    key: "CT463",
    weight: 2,
  },
  {
    name: "Tiểu luận tốt nghiệp - KTPM",
    key: "CT464",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - KHMT",
    key: "CT465",
    weight: 4
  },
  {
    name: "Niên luận - CNTT",
    key: "CT466",
    weight: 3
  },
  {
    name: "Quản trị dữ liệu",
    key: "CT467",
    weight: 3
  },
  {
    name: "Tiểu luận tốt nghiệp - CNTT",
    key: "CT468",
    weight: 4
  },
  {
    name: "Quản trị dữ liệu ứng dụng",
    key: "CT469",
    weight: 2
  },
  {
    name: "Triển khai dịch vụ mạng và ứng dụng Internet",
    key: "CT477",
    weight: 2,
  },
  {
    name: "Xây dựng ứng dụng Web với PHP",
    key: "CT480",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - CNTT",
    key: "CT550",
    weight: 15
  },
  {
    name: "Luận văn tốt nghiệp - HTTT",
    key: "CT551",
    weight: 15
  },
  {
    name: "Luận văn tốt nghiệp - KHMT",
    key: "CT552",
    weight: 15
  },
  {
    name: "Luận văn tốt nghiệp - HTTT",
    key: "CT591",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - TT&MMT",
    key: "CT592",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - CNTT",
    key: "CT593",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - KTPM",
    key: "CT594",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - KHMT",
    key: "CT595",
    weight: 10
  },
  {
    name: "Tiếng Anh chuyên ngành",
    key: "EN103C",
    weight: 3
  },
  {
    name: "Pháp văn căn bản 1 (*)",
    key: "FL001",
    weight: 4
  },
  {
    name: "Pháp văn căn bản 2 (*)",
    key: "FL002",
    weight: 3
  },
  {
    name: "Nghe và Nói 2",
    key: "FL002H",
    weight: 2
  },
  {
    name: "Pháp văn căn bản 3 (*)",
    key: "FL003",
    weight: 3
  },
  {
    name: "Đọc hiểu 2",
    key: "FL004H",
    weight: 2
  },
  {
    name: "Viết 2",
    key: "FL006H",
    weight: 2
  },
  {
    name: "Pháp văn tăng cường 1",
    key: "FL007",
    weight: 4
  },
  {
    name: "Kỹ năng giải quyết vấn đề",
    key: "FL092H",
    weight: 1
  },
  {
    name: "Kỹ năng dẫn dắt",
    key: "FL093H",
    weight: 1
  },
  {
    name: "Ngữ pháp nâng cao",
    key: "FL102H",
    weight: 2
  },
  {
    name: "Ngữ âm thực hành 2",
    key: "FL104H",
    weight: 2
  },
  {
    name: "Nghe Nói 2 - Kỹ năng giao tiếp trung cấp 1",
    key: "FL106H",
    weight: 3,
  },
  {
    name: "Nghe Nói 4 - Kỹ năng giao tiếp nâng cao",
    key: "FL108H",
    weight: 2,
  },
  {
    name: "Đọc 2 - Kỹ năng đọc hiểu trung cấp 1",
    key: "FL111H",
    weight: 2,
  },
  {
    name: "Đọc 4 - Kỹ năng đọc hiểu nâng cao",
    key: "FL113H",
    weight: 2,
  },
  {
    name: "Viết 2 - Các thể loại luận 1",
    key: "FL116H",
    weight: 2
  },
  {
    name: "Viết 4 - Văn bản xã hội",
    key: "FL118H",
    weight: 2
  },
  {
    name: "Dẫn luận ngôn ngữ",
    key: "FL201H",
    weight: 2
  },
  {
    name: "Ngữ nghĩa học và ngữ dụng học tiếng Anh",
    key: "FL204H",
    weight: 3,
  },
  {
    name: "Đọc - Viết B1",
    key: "FL205",
    weight: 3
  },
  {
    name: "Đọc - Viết B2.1",
    key: "FL206",
    weight: 3
  },
  {
    name: "Đọc - Viết B2.2",
    key: "FL207",
    weight: 3
  },
  {
    name: "Văn hóa các nước nói tiếng Anh",
    key: "FL207H",
    weight: 3
  },
  {
    name: "Đọc - Viết C1.1",
    key: "FL208",
    weight: 3
  },
  {
    name: "Đọc C1.2",
    key: "FL209",
    weight: 2
  },
  {
    name: "Phiên dịch đuổi căn bản",
    key: "FL210H",
    weight: 2
  },
  {
    name: "Đọc phát triển kỹ năng phản biện",
    key: "FL211",
    weight: 2
  },
  {
    name: "Giao tiếp liên văn hóa",
    key: "FL212",
    weight: 3
  },
  {
    name: "Kỹ năng giao tiếp và thuyết trình chuyên nghiệp",
    key: "FL214",
    weight: 2,
  },
  {
    name: "Kỹ năng thuyết trình",
    key: "FL215",
    weight: 2
  },
  {
    name: "Lý luận dạy học ngoại ngữ",
    key: "FL217",
    weight: 2
  },
  {
    name: "Đánh giá kết quả học tập ngoại ngữ",
    key: "FL218",
    weight: 2,
  },
  {
    name: "Nghe - Nói B1",
    key: "FL219",
    weight: 3
  },
  {
    name: "Nghe - Nói B2.1",
    key: "FL220",
    weight: 3
  },
  {
    name: "Nghe - Nói B2.2",
    key: "FL221",
    weight: 3
  },
  {
    name: "Nghe - Nói C1.1",
    key: "FL222",
    weight: 3
  },
  {
    name: "Nghe - Nói C1.2",
    key: "FL223",
    weight: 2
  },
  {
    name: "Nghe - Nói mở rộng C1.2",
    key: "FL224",
    weight: 2
  },
  {
    name: "Nghe - Nói C1.3",
    key: "FL225",
    weight: 2
  },
  {
    name: "Giảng dạy các yếu tố ngôn ngữ",
    key: "FL227",
    weight: 3
  },
  {
    name: "Phát triển chương trình giáo dục ngoại ngữ",
    key: "FL238",
    weight: 2,
  },
  {
    name: "Quá trình tiếp thu ngôn ngữ thứ hai - Anh văn",
    key: "FL245",
    weight: 3,
  },
  {
    name: "Tiếng Anh định hướng nghề nghiệp",
    key: "FL247",
    weight: 3
  },
  {
    name: "Tiếng Anh du lịch",
    key: "FL248",
    weight: 3
  },
  {
    name: "Tiếng Anh kinh doanh",
    key: "FL249",
    weight: 3
  },
  {
    name: "Tiếng Anh marketing",
    key: "FL250",
    weight: 3
  },
  {
    name: "Tiếng Anh nhà hàng khách sạn",
    key: "FL251",
    weight: 3
  },
  {
    name: "Tiếng Anh thư tín thương mại và văn phòng",
    key: "FL252",
    weight: 3,
  },
  {
    name: "Tổng quan về giảng dạy tiếng Anh",
    key: "FL259",
    weight: 3
  },
  {
    name: "Viết C1.2",
    key: "FL262",
    weight: 2
  },
  {
    name: "Viết nâng cao - PV",
    key: "FL263",
    weight: 3
  },
  {
    name: "Tiếng Anh văn phòng",
    key: "FL301H",
    weight: 2
  },
  {
    name: "Tiếng Anh nhà hàng-khách sạn",
    key: "FL304H",
    weight: 2
  },
  {
    name: "Marketing căn bản",
    key: "FL307H",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp",
    key: "FL402H",
    weight: 4
  },
  {
    name: "Văn học Anh - Mỹ",
    key: "FL403H",
    weight: 2
  },
  {
    name: "Phân tích diễn ngôn tiếng Anh",
    key: "FL404H",
    weight: 2
  },
  {
    name: "Giao tiếp liên văn hóa",
    key: "FL405H",
    weight: 2
  },
  {
    name: "Biên dịch nâng cao",
    key: "FL406H",
    weight: 2
  },
  {
    name: "Phiên dịch đuổi nâng cao",
    key: "FL407H",
    weight: 2
  },
  {
    name: "Ngôn ngữ học đối chiếu",
    key: "FL408H",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp Ngôn ngữ Anh",
    key: "FL501H",
    weight: 10,
  },
  {
    name: "Tổ chức sản xuất và kinh doanh nông nghiệp",
    key: "HG251",
    weight: 3,
  },
  {
    name: "Thương mại nông nghiệp",
    key: "HG252",
    weight: 3
  },
  {
    name: "Anh văn chuyên ngành kinh doanh nông nghiệp",
    key: "HG253",
    weight: 2,
  },
  {
    name: "Xây dựng và quản lý dự án kinh doanh",
    key: "HG254",
    weight: 2,
  },
  {
    name: "Công nghệ bảo quản và chế biến nông-lâm-thủy sản",
    key: "HG255",
    weight: 3,
  },
  {
    name: "Luận văn tốt nghiệp – KDNN",
    key: "HG351",
    weight: 10
  },
  {
    name: "Toán kỹ thuật",
    key: "KC100H",
    weight: 2
  },
  {
    name: "Xử lý tín hiệu số",
    key: "KC101",
    weight: 2
  },
  {
    name: "An toàn trong thí nghiệm hóa học",
    key: "KC101H",
    weight: 1,
  },
  {
    name: "Thiết kế hệ thống số",
    key: "KC102",
    weight: 2
  },
  {
    name: "TT. Mạch và Tín hiệu",
    key: "KC103",
    weight: 1
  },
  {
    name: "TT. Hóa vô cơ",
    key: "KC103H",
    weight: 2
  },
  {
    name: "Hóa hữu cơ",
    key: "KC104H",
    weight: 3
  },
  {
    name: "Cơ học đất",
    key: "KC106",
    weight: 3
  },
  {
    name: "Hóa lý: Động học và điện hóa học",
    key: "KC107H",
    weight: 2,
  },
  {
    name: "Hóa học đại cương",
    key: "KC108H",
    weight: 3
  },
  {
    name: "TT. Hóa học đại cương",
    key: "KC109H",
    weight: 1
  },
  {
    name: "Tin học ứng dụng đường",
    key: "KC110",
    weight: 2
  },
  {
    name: "Hóa lý: Nhiệt động hóa học",
    key: "KC112",
    weight: 2
  },
  {
    name: "An toàn trong thí nghiệm hóa học",
    key: "KC113",
    weight: 1
  },
  {
    name: "Thiết kế và phân tích thí nghiệm",
    key: "KC113H",
    weight: 3,
  },
  {
    name: "Đồ họa kỹ thuật trên máy tính",
    key: "KC114",
    weight: 2
  },
  {
    name: "Tham quan định hướng ngành nghề",
    key: "KC114H",
    weight: 2
  },
  {
    name: "TT. Địa chất công trình - CĐ",
    key: "KC115",
    weight: 1
  },
  {
    name: "Thiết bị cơ lưu chất và vật liệu rời",
    key: "KC115H",
    weight: 3,
  },
  {
    name: "Vật liệu điện",
    key: "KC116",
    weight: 3
  },
  {
    name: "Điện tử cơ bản",
    key: "KC118",
    weight: 3
  },
  {
    name: "TT. Quá trình và Thiết bị",
    key: "KC118H",
    weight: 2
  },
  {
    name: "Mạch xung",
    key: "KC119",
    weight: 3
  },
  {
    name: "Thực tập ngành nghề",
    key: "KC120H",
    weight: 2
  },
  {
    name: "TT. Khoa học và kỹ thuật vật liệu đại cương",
    key: "KC121",
    weight: 1,
  },
  {
    name: "Kỹ thuật phản ứng",
    key: "KC122H",
    weight: 3
  },
  {
    name: "Quá trình và thiết bị trong công nghệ vật liệu",
    key: "KC124",
    weight: 3,
  },
  {
    name: "TT. Các phương pháp phân tích hiện đại",
    key: "KC124H",
    weight: 2,
  },
  {
    name: "Tính chất cơ của vật liệu",
    key: "KC125",
    weight: 2
  },
  {
    name: "Đồ án thiết kế và chế tạo sản phẩm",
    key: "KC126H",
    weight: 2,
  },
  {
    name: "Dụng cụ đo",
    key: "KC128H",
    weight: 2
  },
  {
    name: "Bê tông dự ứng lực",
    key: "KC130",
    weight: 2
  },
  {
    name: "Hóa học và Hóa lý polymer",
    key: "KC132H",
    weight: 3
  },
  {
    name: "Cấu trúc máy tính",
    key: "KC133",
    weight: 3
  },
  {
    name: "Vật liệu composite",
    key: "KC134H",
    weight: 2
  },
  {
    name: "Công nghệ Hóa mỹ phẩm",
    key: "KC139H",
    weight: 2
  },
  {
    name: "Công nghệ các chất hoạt động bề mặt",
    key: "KC140H",
    weight: 2,
  },
  {
    name: "Công nghệ điện hóa",
    key: "KC149H",
    weight: 2
  },
  {
    name: "Kỹ thuật xử lý nước thải",
    key: "KC151H",
    weight: 2
  },
  {
    name: "Nhiên liệu sinh học",
    key: "KC152H",
    weight: 2
  },
  {
    name: "Lập trình căn bản kỹ thuật",
    key: "KC154H",
    weight: 3
  },
  {
    name: "Toán kỹ thuật",
    key: "KC156H",
    weight: 2
  },
  {
    name: "Vật liệu điện",
    key: "KC157H",
    weight: 3
  },
  {
    name: "Điện tử cơ bản",
    key: "KC158H",
    weight: 3
  },
  {
    name: "Mạch điện 1",
    key: "KC159H",
    weight: 2
  },
  {
    name: "Trường điện từ",
    key: "KC161H",
    weight: 2
  },
  {
    name: "Vẽ kỹ thuật - Kỹ thuật điện",
    key: "KC162H",
    weight: 3
  },
  {
    name: "Lý thuyết Điều khiển tự động",
    key: "KC164H",
    weight: 2
  },
  {
    name: "Cơ lý thuyết - XD",
    key: "KC168H",
    weight: 3
  },
  {
    name: "Cơ học kết cấu",
    key: "KC171H",
    weight: 4
  },
  {
    name: "Vật liệu xây dựng",
    key: "KC174H",
    weight: 3
  },
  {
    name: "Cơ học đất",
    key: "KC175H",
    weight: 4
  },
  {
    name: "Cơ học lưu chất",
    key: "KC176H",
    weight: 2
  },
  {
    name: "Thống kê ứng dụng kỹ thuật",
    key: "KC177H",
    weight: 3
  },
  {
    name: "Đồ án kết cấu bê-tông",
    key: "KC183H",
    weight: 2
  },
  {
    name: "Đồ án kết cấu thép",
    key: "KC185H",
    weight: 2
  },
  {
    name: "Máy xây dựng và Kỹ thuật thi công",
    key: "KC186H",
    weight: 3,
  },
  {
    name: "Thí nghiệm kết cấu công trình",
    key: "KC196",
    weight: 1
  },
  {
    name: "Thống kê ứng dụng",
    key: "KC198",
    weight: 2
  },
  {
    name: "Hóa vô cơ và hữu cơ đại cương",
    key: "KC199",
    weight: 3
  },
  {
    name: "Thực tập Hệ thống điện",
    key: "KC201",
    weight: 2
  },
  {
    name: "Máy điện 2",
    key: "KC202H",
    weight: 3
  },
  {
    name: "TT. Tay nghề điện",
    key: "KC203",
    weight: 4
  },
  {
    name: "Hệ thống điện 1",
    key: "KC203H",
    weight: 3
  },
  {
    name: "Ngắn mạch và ổn định hệ thống điện",
    key: "KC204",
    weight: 3,
  },
  {
    name: "Truyền động điện",
    key: "KC205",
    weight: 3
  },
  {
    name: "TT. Hệ thống điện",
    key: "KC205H",
    weight: 2
  },
  {
    name: "Bảo vệ rơle và tự động hóa",
    key: "KC206",
    weight: 2
  },
  {
    name: "Đồ án Hệ thống điện",
    key: "KC206H",
    weight: 2
  },
  {
    name: "PLC-KT. Điện",
    key: "KC207",
    weight: 3
  },
  {
    name: "Đồ Án điện công nghiệp",
    key: "KC208",
    weight: 2
  },
  {
    name: "Điện tử công suất",
    key: "KC209",
    weight: 3
  },
  {
    name: "Ngắn mạch và ổn định hệ thống điện",
    key: "KC209H",
    weight: 3,
  },
  {
    name: "Quản lý và sử dụng điện năng",
    key: "KC210",
    weight: 2
  },
  {
    name: "Truyền động điện",
    key: "KC210H",
    weight: 3
  },
  {
    name: "Năng lượng tái tạo",
    key: "KC211",
    weight: 2
  },
  {
    name: "PLC-KT. Điện",
    key: "KC212H",
    weight: 3
  },
  {
    name: "Thiết bị điện cao áp",
    key: "KC213",
    weight: 2
  },
  {
    name: "Cung cấp điện",
    key: "KC213H",
    weight: 2
  },
  {
    name: "Thiết kế máy điện quay",
    key: "KC214",
    weight: 2
  },
  {
    name: "Khí cụ điện",
    key: "KC214H",
    weight: 2
  },
  {
    name: "Thiết kế máy biến Áp điện lực",
    key: "KC215",
    weight: 2
  },
  {
    name: "Xử lý tín hiệu số nâng cao",
    key: "KC219",
    weight: 3
  },
  {
    name: "Báo cáo chuyên đề KT. Điện",
    key: "KC219H",
    weight: 2
  },
  {
    name: "TT. Xử lý tín hiệu số nâng cao",
    key: "KC220",
    weight: 1
  },
  {
    name: "Kỹ thuật siêu cao tần",
    key: "KC221",
    weight: 3
  },
  {
    name: "Truyền thông không dây",
    key: "KC222",
    weight: 3
  },
  {
    name: "Lập trình truyền thông",
    key: "KC223",
    weight: 3
  },
  {
    name: "Vận hành và điều khiển hệ thống điện",
    key: "KC223H",
    weight: 2,
  },
  {
    name: "Phát triển ứng dụng hệ thống nhúng",
    key: "KC224",
    weight: 2,
  },
  {
    name: "Nguồn năng lượng tái tạo và quản lý",
    key: "KC224H",
    weight: 2,
  },
  {
    name: "Lập trình điều khiển trên thiết bị di động",
    key: "KC225",
    weight: 2,
  },
  {
    name: "Phân tích và thiết kế thuật toán",
    key: "KC226",
    weight: 3
  },
  {
    name: "Đồ họa máy tính",
    key: "KC227",
    weight: 3
  },
  {
    name: "Vẽ kỹ thuật - kỹ thuật điện",
    key: "KC228",
    weight: 3
  },
  {
    name: "Vi mạch số",
    key: "KC229",
    weight: 3
  },
  {
    name: "Vi mạch tương tự",
    key: "KC230",
    weight: 3
  },
  {
    name: "Lập trình mạng",
    key: "KC231",
    weight: 3
  },
  {
    name: "Kỹ thuật xử lý Ảnh",
    key: "KC232",
    weight: 3
  },
  {
    name: "Đường đô thị",
    key: "KC234",
    weight: 3
  },
  {
    name: "Thiết kế hệ điều khiển - TĐH",
    key: "KC236",
    weight: 2
  },
  {
    name: "Cấu trúc dữ liệu và giải thuật - CN",
    key: "KC237",
    weight: 3,
  },
  {
    name: "Quá trình và thiết bị truyền khối - KTHH",
    key: "KC239H",
    weight: 3,
  },
  {
    name: "Nền móng công trình",
    key: "KC240",
    weight: 3
  },
  {
    name: "Kết cấu bê-tông cơ sở",
    key: "KC241",
    weight: 3
  },
  {
    name: "Hóa học chất rắn",
    key: "KC242H",
    weight: 2
  },
  {
    name: "Tổ chức thi công và an toàn lao động",
    key: "KC243",
    weight: 3,
  },
  {
    name: "Mố trụ cầu",
    key: "KC244",
    weight: 2
  },
  {
    name: "Cấu kiện bê-tông đặc biệt",
    key: "KC245",
    weight: 3
  },
  {
    name: "Công trình trên đất yếu",
    key: "KC246",
    weight: 3
  },
  {
    name: "Kỹ thuật thi công công trình đặc biệt",
    key: "KC247",
    weight: 2,
  },
  {
    name: "Quản lý dự án xây dựng",
    key: "KC247H",
    weight: 3
  },
  {
    name: "Công trình xanh",
    key: "KC248",
    weight: 2
  },
  {
    name: "Kết cấu bê-tông công trình dân dụng",
    key: "KC248H",
    weight: 3,
  },
  {
    name: "Công trình bảo vệ bờ",
    key: "KC249",
    weight: 2
  },
  {
    name: "Đánh giá tác động môi trường - XD",
    key: "KC250",
    weight: 2,
  },
  {
    name: "Thi công công trình thủy lợi",
    key: "KC251",
    weight: 3
  },
  {
    name: "Chuyên đề XD1 - Nền móng",
    key: "KC257",
    weight: 2
  },
  {
    name: "Chuyên đề XD2 - Kết cấu bê tông",
    key: "KC258",
    weight: 2
  },
  {
    name: "Chuyên đề XD3 - Kết cấu thép",
    key: "KC259",
    weight: 2
  },
  {
    name: "Chuyên đề XD4 - Thi công",
    key: "KC260",
    weight: 2
  },
  {
    name: "Kết cấu thép nhà công nghiệp",
    key: "KC260H",
    weight: 3
  },
  {
    name: "Chuyên đề XD5 - Qui hoạch, Kiến trúc",
    key: "KC261",
    weight: 2,
  },
  {
    name: "Kỹ thuật bảo trì công nghiệp",
    key: "KC262",
    weight: 2
  },
  {
    name: "Lập trình hướng đối tượng",
    key: "KC263",
    weight: 3
  },
  {
    name: "Đồ án Thiết kế cầu bê tông",
    key: "KC268",
    weight: 2
  },
  {
    name: "Kinh tế xây dựng",
    key: "KC269",
    weight: 2
  },
  {
    name: "Chuyên đề nâng cao: Thiết kế cầu bê tông",
    key: "KC270",
    weight: 2,
  },
  {
    name: "Đồ án Thiết kế cầu thép",
    key: "KC271",
    weight: 2
  },
  {
    name: "Đồ Án Mố trụ cầu",
    key: "KC273",
    weight: 2
  },
  {
    name: "Đồ án thiết kế đường ô tô",
    key: "KC274",
    weight: 2
  },
  {
    name: "Chuyên đề nâng cao: Thiết kế đường ô tô",
    key: "KC275",
    weight: 2,
  },
  {
    name: "Khai thác và Kiểm định công trình cầu",
    key: "KC277",
    weight: 2,
  },
  {
    name: "Khai thác và Kiểm định công trình đường",
    key: "KC278",
    weight: 2,
  },
  {
    name: "Tổ chức thi công",
    key: "KC282",
    weight: 3
  },
  {
    name: "Thiết kế đường ô tô nâng cao",
    key: "KC284",
    weight: 2
  },
  {
    name: "Thiết kế đường ô tô",
    key: "KC286",
    weight: 2
  },
  {
    name: "Thiết kế cầu thép",
    key: "KC287",
    weight: 2
  },
  {
    name: "Thiết kế cầu bê tông",
    key: "KC288",
    weight: 2
  },
  {
    name: "Đồ án chuyên ngành - KTVL",
    key: "KC290",
    weight: 2
  },
  {
    name: "Đồ án thiết kế - KTVL",
    key: "KC291",
    weight: 2
  },
  {
    name: "Đồ án gia công - KTVL",
    key: "KC292",
    weight: 2
  },
  {
    name: "Vật liệu y sinh",
    key: "KC293",
    weight: 2
  },
  {
    name: "Nhiên liệu sinh học",
    key: "KC294",
    weight: 2
  },
  {
    name: "Thực tập ngành nghề - KTVL",
    key: "KC295",
    weight: 2
  },
  {
    name: "Các phương pháp phân tích vật liệu",
    key: "KC296",
    weight: 3,
  },
  {
    name: "Polymer sinh học và phân hủy sinh học",
    key: "KC299",
    weight: 2,
  },
  {
    name: "Kỹ thuật chân không và màng mỏng",
    key: "KC302",
    weight: 2
  },
  {
    name: "Vật liệu huỳnh quang",
    key: "KC303",
    weight: 2
  },
  {
    name: "Vật liệu chịu lửa",
    key: "KC304",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp-KTVL",
    key: "KC308",
    weight: 10
  },
  {
    name: "Tiểu luận tốt nghiệp-KTVL",
    key: "KC309",
    weight: 4
  },
  {
    name: "Hệ thống thông tin quản lý - QLCN",
    key: "KC317",
    weight: 3,
  },
  {
    name: "Chuyên đề quản lý dự án",
    key: "KC320",
    weight: 2
  },
  {
    name: "Chuyên đề quy hoạch giao thông",
    key: "KC321",
    weight: 2
  },
  {
    name: "Chuyên đề Viễn thông",
    key: "KC323",
    weight: 1
  },
  {
    name: "Cơ sở thiết kế máy và thiết bị hóa chất",
    key: "KC325",
    weight: 2,
  },
  {
    name: "Công nghệ IoT và ứng dụng",
    key: "KC326",
    weight: 3
  },
  {
    name: "Đồ án nền móng công trình thủy",
    key: "KC327",
    weight: 2
  },
  {
    name: "Đo lường điện",
    key: "KC328",
    weight: 3
  },
  {
    name: "Xây dựng dự án kỹ thuật phục vụ cộng đồng (EPICS)",
    key: "KC329",
    weight: 2,
  },
  {
    name: "Giải tích hệ thống điện",
    key: "KC330",
    weight: 3
  },
  {
    name: "Đồ án điện tử căn bản",
    key: "KC331",
    weight: 2
  },
  {
    name: "Khoa học và công nghệ vật nano",
    key: "KC332",
    weight: 2
  },
  {
    name: "Kiến trúc công trình",
    key: "KC335",
    weight: 3
  },
  {
    name: "Kỹ thuật điện công nghiệp",
    key: "KC336",
    weight: 3
  },
  {
    name: "Kỹ thuật điều khiển tự động",
    key: "KC337",
    weight: 2
  },
  {
    name: "Lập trình Matlab",
    key: "KC341",
    weight: 2
  },
  {
    name: "Lập trình PLC",
    key: "KC342",
    weight: 3
  },
  {
    name: "Lập trình ứng dụng - CK",
    key: "KC343",
    weight: 2
  },
  {
    name: "Linh kiện bán dẫn",
    key: "KC344",
    weight: 2
  },
  {
    name: "Mạch điện",
    key: "KC346",
    weight: 4
  },
  {
    name: "Mạch điện tử",
    key: "KC347",
    weight: 4
  },
  {
    name: "Mạch xung số",
    key: "KC349",
    weight: 3
  },
  {
    name: "Máy điện",
    key: "KC351",
    weight: 4
  },
  {
    name: "Mô hình hóa và mô phỏng",
    key: "KC353",
    weight: 3
  },
  {
    name: "Mô hình thông tin xây dựng (BIM)",
    key: "KC354",
    weight: 2
  },
  {
    name: "Nhiệt động lực học kỹ thuật",
    key: "KC356",
    weight: 2
  },
  {
    name: "Quá trình và thiết bị truyền nhiệt",
    key: "KC361",
    weight: 3,
  },
  {
    name: "Quản lý giao thông",
    key: "KC362",
    weight: 2
  },
  {
    name: "Năng lượng tái tạo và quản lý",
    key: "KC363",
    weight: 2
  },
  {
    name: "Robot công nghiệp",
    key: "KC364",
    weight: 3
  },
  {
    name: "Thiết kế nhà máy điện và trạm biến áp",
    key: "KC367",
    weight: 3,
  },
  {
    name: "Tổng luận công trình giao thông",
    key: "KC369",
    weight: 2
  },
  {
    name: "Truyền vận",
    key: "KC370",
    weight: 2
  },
  {
    name: "TT. Linh kiện điện tử",
    key: "KC372",
    weight: 1
  },
  {
    name: "TT. Máy điện",
    key: "KC373",
    weight: 2
  },
  {
    name: "TT. Viễn thông 1",
    key: "KC375",
    weight: 1
  },
  {
    name: "Ứng dụng Blockchain - QLCN",
    key: "KC377",
    weight: 3
  },
  {
    name: "Vẽ kỹ thuật",
    key: "KC379",
    weight: 2
  },
  {
    name: "Ứng dụng vật liệu địa kỹ thuật",
    key: "KC380",
    weight: 3
  },
  {
    name: "Vi điều khiển ứng dụng",
    key: "KC381",
    weight: 2
  },
  {
    name: "Kết cấu bê tông cốt thép",
    key: "KC385",
    weight: 2
  },
  {
    name: "Lý thuyết thí nghiệm nền móng",
    key: "KC389",
    weight: 3
  },
  {
    name: "Kết cấu thép cầu",
    key: "KC390",
    weight: 2
  },
  {
    name: "Cấu tạo ô tô",
    key: "KC391",
    weight: 3
  },
  {
    name: "Sản xuất tinh gọn",
    key: "KC392",
    weight: 3
  },
  {
    name: "Nghiên cứu và phát triển sản phẩm",
    key: "KC393",
    weight: 3,
  },
  {
    name: "Kỹ thuật ra quyết định",
    key: "KC394",
    weight: 3
  },
  {
    name: "Hệ thống điện, điện tử và điều khiển tự động trên ô tô",
    key: "KC409",
    weight: 3,
  },
  {
    name: "Thực tập Hệ thống điện, điện tử và điều khiển tự động trên ô tô",
    key: "KC410",
    weight: 2,
  },
  {
    name: "Luận văn tốt nghiệp - CNHH",
    key: "KC505",
    weight: 14
  },
  {
    name: "Luận văn tốt nghiệp - KTXD",
    key: "KC507",
    weight: 14
  },
  {
    name: "Pháp luật đại cương",
    key: "KL001",
    weight: 2
  },
  {
    name: "Quyền con người",
    key: "KL051",
    weight: 2
  },
  {
    name: "Lý luận nhà nước và pháp luật 1",
    key: "KL101",
    weight: 2
  },
  {
    name: "Lý luận nhà nước và pháp luật 2",
    key: "KL102",
    weight: 2
  },
  {
    name: "Luật so sánh",
    key: "KL105",
    weight: 2
  },
  {
    name: "Lịch sử nhà nước và pháp luật",
    key: "KL113",
    weight: 2
  },
  {
    name: "Soạn thảo văn bản pháp luật",
    key: "KL114",
    weight: 2
  },
  {
    name: "Phương pháp nghiên cứu khoa học - Luật",
    key: "KL115",
    weight: 2,
  },
  {
    name: "Thuật ngữ pháp lý - tiếng Anh",
    key: "KL116",
    weight: 2
  },
  {
    name: "Luật hình sự phần chung",
    key: "KL118",
    weight: 2
  },
  {
    name: "Luật hình sự phần riêng",
    key: "KL119",
    weight: 2
  },
  {
    name: "Luật hôn nhân và gia đình",
    key: "KL122",
    weight: 2
  },
  {
    name: "Luật lao động",
    key: "KL123",
    weight: 3
  },
  {
    name: "Luật tài chính nhà nước",
    key: "KL124",
    weight: 3
  },
  {
    name: "Luật hành chính",
    key: "KL127",
    weight: 3
  },
  {
    name: "Luật dân sự: lý luận chung về luật dân sự",
    key: "KL130",
    weight: 2,
  },
  {
    name: "Pháp luật thương mại 1",
    key: "KL131",
    weight: 2
  },
  {
    name: "Pháp luật thương mại 2",
    key: "KL132",
    weight: 2
  },
  {
    name: "Luật dân sự: Nghĩa vụ dân sự",
    key: "KL133",
    weight: 2
  },
  {
    name: "Luật dân sự",
    key: "KL134",
    weight: 2
  },
  {
    name: "Luật bảo vệ chăm sóc, giáo dục trẻ em",
    key: "KL136",
    weight: 2,
  },
  {
    name: "Luật hình sự: Định tội và định khung hình phạt",
    key: "KL203",
    weight: 3,
  },
  {
    name: "Luật dân sự: Nghĩa vụ dân sự và hợp đồng dân sự",
    key: "KL204",
    weight: 3,
  },
  {
    name: "Trình tự, thủ tục giải quyết vụ án hình sự",
    key: "KL205",
    weight: 3,
  },
  {
    name: "Trình tự, thủ tục giải quyết vụ việc dân sự",
    key: "KL206",
    weight: 3,
  },
  {
    name: "Pháp luật về quan hệ hôn nhân và quan hệ gia đình",
    key: "KL207",
    weight: 3,
  },
  {
    name: "Luật hình sự quốc tế",
    key: "KL208",
    weight: 2
  },
  {
    name: "Pháp luật về quy hoạch và giải phóng mặt bằng",
    key: "KL210",
    weight: 2,
  },
  {
    name: "Luật hiến pháp nước ngoài",
    key: "KL211",
    weight: 2
  },
  {
    name: "Luật hành chính các nước",
    key: "KL212",
    weight: 2
  },
  {
    name: "Luật môi trường",
    key: "KL213",
    weight: 3
  },
  {
    name: "Pháp luật về thương nhân",
    key: "KL214",
    weight: 3
  },
  {
    name: "Luật thương mại",
    key: "KL215",
    weight: 3
  },
  {
    name: "Luật thương mại quốc tế công",
    key: "KL217",
    weight: 2
  },
  {
    name: "Luật lao động 2",
    key: "KL218",
    weight: 2
  },
  {
    name: "Luật thuế",
    key: "KL219",
    weight: 3
  },
  {
    name: "Kỹ thuật soạn thảo hợp đồng thương mại",
    key: "KL221",
    weight: 2,
  },
  {
    name: "Luật hình sự: Những vấn đề lý luận về tội phạm",
    key: "KL222",
    weight: 2,
  },
  {
    name: "Những vấn đề lý luận chung về luật tố tụng hình sự",
    key: "KL225",
    weight: 2,
  },
  {
    name: "Những vấn đề lý luận chung về luật tố tụng dân sự",
    key: "KL226",
    weight: 2,
  },
  {
    name: "Pháp luật tố tụng dân sự",
    key: "KL227",
    weight: 3
  },
  {
    name: "Luật ngân sách nhà nước",
    key: "KL228",
    weight: 2
  },
  {
    name: "Luật hiến pháp chuyên sâu",
    key: "KL229",
    weight: 2
  },
  {
    name: "Luật dân sự: Chủ thể, tài sản, quyền sở hữu và quyền thừa kế",
    key: "KL231",
    weight: 2,
  },
  {
    name: "Luật thương mại quốc tế tư",
    key: "KL232",
    weight: 3
  },
  {
    name: "Học thuyết pháp lý",
    key: "KL233",
    weight: 2
  },
  {
    name: "Pháp luật về cạnh tranh và bảo vệ quyền lợi người tiêu dùng",
    key: "KL235",
    weight: 3,
  },
  {
    name: "Luật hiến pháp 1",
    key: "KL301",
    weight: 2
  },
  {
    name: "Luật hiến pháp 2",
    key: "KL302",
    weight: 2
  },
  {
    name: "Luật hành chính 1",
    key: "KL303",
    weight: 2
  },
  {
    name: "Luật hành chính 2",
    key: "KL304",
    weight: 2
  },
  {
    name: "Luật lao động 1",
    key: "KL322",
    weight: 2
  },
  {
    name: "Luật đất đai",
    key: "KL327",
    weight: 3
  },
  {
    name: "Luật môi trường",
    key: "KL328",
    weight: 2
  },
  {
    name: "Tư pháp quốc tế 1",
    key: "KL331",
    weight: 2
  },
  {
    name: "Tư pháp quốc tế 2",
    key: "KL332",
    weight: 2
  },
  {
    name: "Luật thương mại quốc tế",
    key: "KL333",
    weight: 2
  },
  {
    name: "Pháp luật về sở hữu trí tuệ",
    key: "KL335",
    weight: 2
  },
  {
    name: "Bảo đảm nghĩa vụ",
    key: "KL344",
    weight: 2
  },
  {
    name: "Pháp luật về khiếu nại và khiếu kiện hành chính",
    key: "KL353",
    weight: 2,
  },
  {
    name: "Pháp luật về thanh tra",
    key: "KL365",
    weight: 2
  },
  {
    name: "Luật kinh tế",
    key: "KL369",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Luật",
    key: "KL370",
    weight: 10
  },
  {
    name: "Luật tố tụng hình sự",
    key: "KL371",
    weight: 2
  },
  {
    name: "Luật tố tụng dân sự",
    key: "KL374",
    weight: 2
  },
  {
    name: "Công pháp quốc tế",
    key: "KL375",
    weight: 3
  },
  {
    name: "Tư pháp quốc tế",
    key: "KL376",
    weight: 3
  },
  {
    name: "Pháp luật về xây dựng",
    key: "KL377",
    weight: 2
  },
  {
    name: "Luật hành chính 3",
    key: "KL378",
    weight: 2
  },
  {
    name: "Luật an sinh xã hội",
    key: "KL380",
    weight: 2
  },
  {
    name: "Quản lý nhà nước về hộ tịch",
    key: "KL383",
    weight: 2
  },
  {
    name: "Luật về kinh doanh bất động sản",
    key: "KL384",
    weight: 2
  },
  {
    name: "Thủ tục hành chính về nhà đất",
    key: "KL385",
    weight: 2
  },
  {
    name: "Pháp luật về nhà ở",
    key: "KL386",
    weight: 2
  },
  {
    name: "Luật ngân hàng",
    key: "KL388",
    weight: 2
  },
  {
    name: "Pháp luật về cạnh tranh",
    key: "KL389",
    weight: 2
  },
  {
    name: "Pháp luật về chứng khoán và thị trường chứng khoán",
    key: "KL391",
    weight: 2,
  },
  {
    name: "Pháp luật về hoạt động xuất nhập khẩu",
    key: "KL392",
    weight: 2,
  },
  {
    name: "Pháp luật về đầu tư",
    key: "KL393",
    weight: 2
  },
  {
    name: "Pháp luật về thương mại điện tử",
    key: "KL396",
    weight: 2
  },
  {
    name: "Khoa học điều tra hình sự",
    key: "KL400",
    weight: 2
  },
  {
    name: "Tội phạm học",
    key: "KL401",
    weight: 2
  },
  {
    name: "Giám định pháp y",
    key: "KL403",
    weight: 2
  },
  {
    name: "Luật hợp đồng thông dụng",
    key: "KL404",
    weight: 2
  },
  {
    name: "Thực hành nghề Luật",
    key: "KL406",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - Luật",
    key: "KL411",
    weight: 4
  },
  {
    name: "Pháp luật về giá đất",
    key: "KL420",
    weight: 2
  },
  {
    name: "Pháp luật về thanh tra đất đai",
    key: "KL423",
    weight: 2
  },
  {
    name: "Pháp luật về hợp đồng trong thương mại",
    key: "KL427",
    weight: 2,
  },
  {
    name: "Pháp luật về kinh doanh bảo hiểm",
    key: "KL428",
    weight: 2
  },
  {
    name: "Luật trách nhiệm dân sự",
    key: "KL429",
    weight: 2
  },
  {
    name: "Kỹ năng mềm",
    key: "KN001",
    weight: 2
  },
  {
    name: "Đổi mới sáng tạo và khởi nghiệp",
    key: "KN002",
    weight: 2
  },
  {
    name: "Quản trị doanh nghiệp đại cương",
    key: "KT005",
    weight: 2
  },
  {
    name: "Kỹ năng giao tiếp",
    key: "KT022",
    weight: 2
  },
  {
    name: "Xác suất thống kê",
    key: "KT052H",
    weight: 2
  },
  {
    name: "Kỹ năng giao tiếp",
    key: "KT053H",
    weight: 1
  },
  {
    name: "Kỹ năng lãnh đạo",
    key: "KT054H",
    weight: 1
  },
  {
    name: "Kỹ năng giải quyết vấn đề",
    key: "KT056H",
    weight: 1
  },
  {
    name: "Kỹ năng làm việc nhóm",
    key: "KT058H",
    weight: 1
  },
  {
    name: "Kinh tế vi mô 1",
    key: "KT101",
    weight: 3
  },
  {
    name: "Kinh tế vĩ mô 1",
    key: "KT102",
    weight: 3
  },
  {
    name: "Quản trị học",
    key: "KT103",
    weight: 3
  },
  {
    name: "Marketing căn bản",
    key: "KT104",
    weight: 3
  },
  {
    name: "Kinh tế vĩ mô",
    key: "KT104H",
    weight: 3
  },
  {
    name: "Toán kinh tế 1",
    key: "KT105",
    weight: 3
  },
  {
    name: "Nguyên lý kế toán",
    key: "KT106",
    weight: 3
  },
  {
    name: "Toán kinh tế 2",
    key: "KT107",
    weight: 2
  },
  {
    name: "Marketing căn bản",
    key: "KT107H",
    weight: 3
  },
  {
    name: "Nguyên lý thống kê kinh tế",
    key: "KT108",
    weight: 3
  },
  {
    name: "Nguyên lý kế toán",
    key: "KT108H",
    weight: 3
  },
  {
    name: "Phương pháp nghiên cứu kinh tế",
    key: "KT109",
    weight: 2
  },
  {
    name: "Thống kê trong kinh doanh",
    key: "KT110H",
    weight: 3
  },
  {
    name: "Tài chính - Tiền tệ",
    key: "KT111",
    weight: 3
  },
  {
    name: "Kinh tế lượng",
    key: "KT113",
    weight: 3
  },
  {
    name: "Kinh tế công cộng",
    key: "KT114",
    weight: 3
  },
  {
    name: "Kinh tế phát triển",
    key: "KT115",
    weight: 3
  },
  {
    name: "Quản trị nguồn nhân lực",
    key: "KT115H",
    weight: 3
  },
  {
    name: "Kinh tế học hành vi",
    key: "KT118",
    weight: 3
  },
  {
    name: "Phương pháp tư duy và kỹ năng giải quyết vấn đề",
    key: "KT119",
    weight: 2,
  },
  {
    name: "Tài chính cá nhân",
    key: "KT119H",
    weight: 3
  },
  {
    name: "Quản trị sự thay đổi",
    key: "KT123",
    weight: 2
  },
  {
    name: "Lý thuyết và chính sách thương mại",
    key: "KT125",
    weight: 3,
  },
  {
    name: "Phương pháp nghiên cứu trong Kế toán - Kiểm toán",
    key: "KT126",
    weight: 2,
  },
  {
    name: "Nguyên lý Tiền tệ và Hệ thống tài chính",
    key: "KT127H",
    weight: 3,
  },
  {
    name: "Kế toán tài chính 3",
    key: "KT128",
    weight: 3
  },
  {
    name: "Phương pháp nghiên cứu trong TC-NH",
    key: "KT129H",
    weight: 2,
  },
  {
    name: "Chuẩn mực kế toán",
    key: "KT130",
    weight: 3
  },
  {
    name: "Kiến tập ngành Kinh tế tài nguyên môi trường",
    key: "KT133",
    weight: 2,
  },
  {
    name: "Kiến tập ngành Kinh tế",
    key: "KT134",
    weight: 2
  },
  {
    name: "Thương mại điện tử",
    key: "KT135",
    weight: 3
  },
  {
    name: "Anh văn chuyên ngành du lịch",
    key: "KT137",
    weight: 3
  },
  {
    name: "Anh văn chuyên ngành Tài chính - Ngân hàng",
    key: "KT190",
    weight: 3,
  },
  {
    name: "Seminar kinh tế nông nghiệp",
    key: "KT196",
    weight: 2
  },
  {
    name: "Ứng dụng toán trong kinh doanh",
    key: "KT197",
    weight: 2
  },
  {
    name: "Chuẩn mực kế toán quốc tế",
    key: "KT198",
    weight: 3
  },
  {
    name: "Digital Marketing",
    key: "KT200",
    weight: 2
  },
  {
    name: "Quản trị dự án",
    key: "KT201",
    weight: 2
  },
  {
    name: "Quản trị tài chính 2",
    key: "KT202H",
    weight: 3
  },
  {
    name: "Ứng dụng toán trong kinh doanh",
    key: "KT203",
    weight: 3
  },
  {
    name: "Quản trị nguồn nhân lực",
    key: "KT204",
    weight: 3
  },
  {
    name: "Thị trường chứng khoán",
    key: "KT204H",
    weight: 3
  },
  {
    name: "Quy hoạch tuyến tính",
    key: "KT205",
    weight: 3
  },
  {
    name: "Đạo đức kinh doanh và văn hóa doanh nghiệp",
    key: "KT206",
    weight: 2,
  },
  {
    name: "Tài chính công",
    key: "KT206H",
    weight: 3
  },
  {
    name: "Mô phỏng tình huống trong kinh doanh",
    key: "KT207",
    weight: 3,
  },
  {
    name: "Anh văn chuyên môn kinh tế",
    key: "KT209",
    weight: 3
  },
  {
    name: "Tâm lý quản lý",
    key: "KT210",
    weight: 2
  },
  {
    name: "Quản trị kinh doanh lưu trú",
    key: "KT212",
    weight: 3
  },
  {
    name: "Quản trị kinh doanh nhà hàng",
    key: "KT213",
    weight: 3
  },
  {
    name: "Marketing địa phương",
    key: "KT215",
    weight: 2
  },
  {
    name: "Marketing thương mại",
    key: "KT217",
    weight: 3
  },
  {
    name: "Chiêu thị và truyền thông Marketing",
    key: "KT218",
    weight: 2,
  },
  {
    name: "Quan hệ công chúng",
    key: "KT220",
    weight: 2
  },
  {
    name: "Phân tích báo cáo tài chính",
    key: "KT222",
    weight: 2
  },
  {
    name: "Anh văn thương mại 2",
    key: "KT223",
    weight: 2
  },
  {
    name: "Vận tải và bảo hiểm ngoại thương",
    key: "KT224",
    weight: 3
  },
  {
    name: "Đàm phán kinh doanh quốc tế",
    key: "KT225",
    weight: 3
  },
  {
    name: "Quản trị tài chính các công ty đa quốc gia",
    key: "KT226",
    weight: 3,
  },
  {
    name: "Logistic trong ngoại thương",
    key: "KT227",
    weight: 3
  },
  {
    name: "Chuyên đề ngành",
    key: "KT228",
    weight: 1
  },
  {
    name: "Quản trị chuỗi cung ứng",
    key: "KT230",
    weight: 2
  },
  {
    name: "Chuyên đề ngành kiểm toán",
    key: "KT236",
    weight: 2
  },
  {
    name: "Marketing nông nghiệp",
    key: "KT240",
    weight: 3
  },
  {
    name: "Kế toán môi trường",
    key: "KT242",
    weight: 2
  },
  {
    name: "Quản trị rủi ro trong thị trường nông sản",
    key: "KT243",
    weight: 2,
  },
  {
    name: "Phân tích chuỗi cung Ứng hàng nông sản",
    key: "KT244",
    weight: 2,
  },
  {
    name: "Kinh tế biến đổi khí hậu",
    key: "KT245",
    weight: 3
  },
  {
    name: "Định giá tài nguyên môi trường",
    key: "KT246",
    weight: 3
  },
  {
    name: "Kinh tế năng lượng tái tạo",
    key: "KT247",
    weight: 2
  },
  {
    name: "Kinh tế học ngân hàng",
    key: "KT249",
    weight: 3
  },
  {
    name: "Kiểm toán hoạt động",
    key: "KT250",
    weight: 3
  },
  {
    name: "Kiểm toán Nhà nước",
    key: "KT251",
    weight: 3
  },
  {
    name: "Kinh doanh nông nghiệp",
    key: "KT253",
    weight: 3
  },
  {
    name: "Khởi sự doanh nghiệp",
    key: "KT254",
    weight: 3
  },
  {
    name: "Phương pháp nghiên cứu trong Tài chính",
    key: "KT257",
    weight: 2,
  },
  {
    name: "Ứng dụng phần mềm trong kế toán",
    key: "KT260",
    weight: 3
  },
  {
    name: "Chuyên đề ngân hàng",
    key: "KT264",
    weight: 2
  },
  {
    name: "Kiến tập ngành ngân hàng",
    key: "KT265",
    weight: 2
  },
  {
    name: "Định giá tài sản",
    key: "KT269",
    weight: 3
  },
  {
    name: "Lịch sử các học thuyết kinh tế",
    key: "KT270",
    weight: 2
  },
  {
    name: "Anh văn chuyên ngành Tài chính - Kế toán",
    key: "KT275",
    weight: 3,
  },
  {
    name: "Kinh doanh quốc tế 2",
    key: "KT280",
    weight: 3
  },
  {
    name: "Tiểu luận tốt nghiệp - Kinh tế",
    key: "KT290",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - QTKD",
    key: "KT291",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - QTDVDLLH",
    key: "KT292",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - Kinh doanh quốc tế",
    key: "KT294",
    weight: 4,
  },
  {
    name: "Tiểu luận tốt nghiệp - KDTM",
    key: "KT295",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp kế toán",
    key: "KT298",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - KTNN",
    key: "KT300",
    weight: 4
  },
  {
    name: "Kinh tế vi mô 2",
    key: "KT301",
    weight: 3
  },
  {
    name: "Đầu tư trực tiếp nước ngoài, thương mại và địa lý",
    key: "KT301H",
    weight: 3,
  },
  {
    name: "Kinh tế vĩ mô 2",
    key: "KT302",
    weight: 3
  },
  {
    name: "Kinh tế quốc tế",
    key: "KT303",
    weight: 3
  },
  {
    name: "Luật thương mại quốc tế",
    key: "KT303H",
    weight: 3
  },
  {
    name: "Kinh tế sản xuất",
    key: "KT304",
    weight: 3
  },
  {
    name: "Kinh tế môi trường",
    key: "KT305",
    weight: 3
  },
  {
    name: "Kinh tế lao động",
    key: "KT306",
    weight: 3
  },
  {
    name: "Kinh tế đối ngoại",
    key: "KT307",
    weight: 3
  },
  {
    name: "Quản trị tài chính",
    key: "KT308",
    weight: 3
  },
  {
    name: "Chiến lược kinh doanh quốc tế",
    key: "KT309H",
    weight: 3
  },
  {
    name: "Phân tích chính sách kinh tế",
    key: "KT310",
    weight: 3
  },
  {
    name: "Logistics",
    key: "KT310H",
    weight: 3
  },
  {
    name: "Seminar chuyên ngành Kinh doanh quốc tế 1",
    key: "KT312H",
    weight: 1,
  },
  {
    name: "Pháp luật về các hiệp định thương mại",
    key: "KT313H",
    weight: 2,
  },
  {
    name: "Hệ thống thông tin kinh tế",
    key: "KT314",
    weight: 2
  },
  {
    name: "Thanh toán quốc tế",
    key: "KT314H",
    weight: 3
  },
  {
    name: "Kế toán ngân sách",
    key: "KT315",
    weight: 3
  },
  {
    name: "Kinh doanh quốc tế",
    key: "KT316",
    weight: 3
  },
  {
    name: "Quản trị đa văn hóa",
    key: "KT316H",
    weight: 3
  },
  {
    name: "Kinh tế nông nghiệp",
    key: "KT318",
    weight: 3
  },
  {
    name: "Kinh tế tài nguyên",
    key: "KT319",
    weight: 3
  },
  {
    name: "Nghiệp vụ ngoại thương 2",
    key: "KT319H",
    weight: 3
  },
  {
    name: "Kiến tập nghiệp vụ ngoại thương",
    key: "KT320H",
    weight: 1
  },
  {
    name: "Nghiên cứu marketing",
    key: "KT321",
    weight: 3
  },
  {
    name: "Thẩm định dự án",
    key: "KT322H",
    weight: 2
  },
  {
    name: "Quản trị marketing",
    key: "KT324",
    weight: 3
  },
  {
    name: "Quản trị đổi mới, cải tiến các công ty đa quốc gia",
    key: "KT327H",
    weight: 2,
  },
  {
    name: "Thanh toán quốc tế",
    key: "KT328",
    weight: 3
  },
  {
    name: "Kinh doanh và chuỗi giá trị toàn cầu",
    key: "KT328H",
    weight: 2,
  },
  {
    name: "Thị trường chứng khoán",
    key: "KT329",
    weight: 3
  },
  {
    name: "Marketing quốc tế",
    key: "KT329H",
    weight: 3
  },
  {
    name: "Thuế",
    key: "KT330",
    weight: 3
  },
  {
    name: "Khởi sự doanh nghiệp",
    key: "KT330H",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - Kinh tế",
    key: "KT331",
    weight: 10
  },
  {
    name: "Phân tích hoạt động kinh doanh",
    key: "KT331H",
    weight: 3
  },
  {
    name: "Marketing quốc tế",
    key: "KT335",
    weight: 3
  },
  {
    name: "Nghiệp vụ ngoại thương",
    key: "KT336",
    weight: 3
  },
  {
    name: "Thương mại điện tử",
    key: "KT337",
    weight: 2
  },
  {
    name: "Đầu tư quốc tế",
    key: "KT338",
    weight: 3
  },
  {
    name: "Kế toán quản trị 1",
    key: "KT339",
    weight: 3
  },
  {
    name: "Kế toán quản trị 2",
    key: "KT340",
    weight: 2
  },
  {
    name: "Kế toán tài chính 1",
    key: "KT341",
    weight: 3
  },
  {
    name: "Kế toán tài chính 2",
    key: "KT342",
    weight: 3
  },
  {
    name: "Kế toán quốc tế",
    key: "KT343",
    weight: 3
  },
  {
    name: "Quản trị chất lượng sản phẩm",
    key: "KT345",
    weight: 2
  },
  {
    name: "Quản trị chiến lược",
    key: "KT346",
    weight: 3
  },
  {
    name: "Quản trị bán hàng",
    key: "KT349",
    weight: 2
  },
  {
    name: "Quản trị du lịch và dịch vụ",
    key: "KT352",
    weight: 3
  },
  {
    name: "Quản trị ngân hàng",
    key: "KT354",
    weight: 3
  },
  {
    name: "Quản trị quan hệ khách hàng",
    key: "KT358",
    weight: 2
  },
  {
    name: "Quản trị rủi ro tài chính",
    key: "KT359",
    weight: 3
  },
  {
    name: "Quản trị sản xuất",
    key: "KT360",
    weight: 3
  },
  {
    name: "Quản trị thương hiệu",
    key: "KT361",
    weight: 3
  },
  {
    name: "Quản trị thương mại",
    key: "KT362",
    weight: 3
  },
  {
    name: "Quản trị văn phòng",
    key: "KT363",
    weight: 2
  },
  {
    name: "Phân tích và đánh giá tác động môi trường",
    key: "KT365",
    weight: 2,
  },
  {
    name: "Luận văn tốt nghiệp - KDQT",
    key: "KT367",
    weight: 10
  },
  {
    name: "Chuyên đề kiểm toán",
    key: "KT369",
    weight: 1
  },
  {
    name: "Hệ thống thông tin kế toán 1",
    key: "KT370",
    weight: 3
  },
  {
    name: "Hệ thống thông tin kế toán 2",
    key: "KT371",
    weight: 2
  },
  {
    name: "Kế toán hành chính sự nghiệp",
    key: "KT373",
    weight: 3
  },
  {
    name: "Kế toán ngân hàng",
    key: "KT374",
    weight: 3
  },
  {
    name: "Kế toán và khai báo thuế",
    key: "KT375",
    weight: 2
  },
  {
    name: "Kiểm toán 1",
    key: "KT376",
    weight: 3
  },
  {
    name: "Kiểm toán 2",
    key: "KT377",
    weight: 3
  },
  {
    name: "Kinh tế du lịch",
    key: "KT381",
    weight: 3
  },
  {
    name: "Tổ chức thực hiện công tác kiểm toán",
    key: "KT384",
    weight: 3,
  },
  {
    name: "Phân tích hoạt động kinh doanh",
    key: "KT393",
    weight: 3
  },
  {
    name: "Marketing du lịch",
    key: "KT397",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - QTKD",
    key: "KT399",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - KDTM",
    key: "KT400",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - Marketing",
    key: "KT401",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - QTDVDLLH",
    key: "KT402",
    weight: 10
  },
  {
    name: "Kinh tế ô nhiễm và sức khỏe",
    key: "KT403",
    weight: 2
  },
  {
    name: "Lý thuyết bảo hiểm",
    key: "KT405",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - TCNH",
    key: "KT409",
    weight: 10
  },
  {
    name: "Phân tích chính sách nông nghiệp",
    key: "KT411",
    weight: 3
  },
  {
    name: "Kinh tế vùng",
    key: "KT413",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - KTNN",
    key: "KT415",
    weight: 10
  },
  {
    name: "Phân tích lợi ích chi phí",
    key: "KT418",
    weight: 2
  },
  {
    name: "Thương mại và môi trường",
    key: "KT419",
    weight: 2
  },
  {
    name: "Dự báo kinh tế",
    key: "KT420",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - KTTNMT",
    key: "KT421",
    weight: 10
  },
  {
    name: "Anh văn thương mại 1",
    key: "KT425",
    weight: 3
  },
  {
    name: "Kỹ thuật đàm phán",
    key: "KT428",
    weight: 2
  },
  {
    name: "Hành vi khách hàng",
    key: "KT429",
    weight: 2
  },
  {
    name: "Hành vi tổ chức",
    key: "KT431",
    weight: 2
  },
  {
    name: "Chuyên đề Ngân hàng",
    key: "KT436",
    weight: 2
  },
  {
    name: "Chuyên đề Kinh tế học",
    key: "KT438",
    weight: 2
  },
  {
    name: "Chuyên đề Kinh tế nông nghiệp",
    key: "KT439",
    weight: 2
  },
  {
    name: "Chuyên đề kinh tế tài nguyên môi trường",
    key: "KT440",
    weight: 2,
  },
  {
    name: "Chuyên đề Marketing",
    key: "KT441",
    weight: 2
  },
  {
    name: "Chuyên đề Quản trị kinh doanh",
    key: "KT443",
    weight: 2
  },
  {
    name: "Chuyên đề Kinh doanh thương mại",
    key: "KT444",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp kế toán",
    key: "KT451",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - Kiểm toán",
    key: "KT452",
    weight: 10
  },
  {
    name: "Kế toán hợp nhất kinh doanh",
    key: "KT454",
    weight: 2
  },
  {
    name: "Kinh tế sử dụng đất",
    key: "KT456",
    weight: 2
  },
  {
    name: "Marketing ngân hàng",
    key: "KT458",
    weight: 3
  },
  {
    name: "Nghiệp vụ ngân hàng cá nhân",
    key: "KT459",
    weight: 3
  },
  {
    name: "Nghiệp vụ ngân hàng doanh nghiệp",
    key: "KT460",
    weight: 3
  },
  {
    name: "Nghiệp vụ thanh toán",
    key: "KT461",
    weight: 3
  },
  {
    name: "Nguyên lý bảo hiểm",
    key: "KT462",
    weight: 3
  },
  {
    name: "Phân tích giá trong nông nghiệp",
    key: "KT465",
    weight: 2
  },
  {
    name: "Quản lý nông trại",
    key: "KT467",
    weight: 2
  },
  {
    name: "Seminar Quản trị dịch vụ du lịch và lữ hành",
    key: "KT469",
    weight: 2,
  },
  {
    name: "Tài chính công",
    key: "KT470",
    weight: 3
  },
  {
    name: "Thống kê trong kinh tế và kinh doanh",
    key: "KT471",
    weight: 3,
  },
  {
    name: "Thực tập kinh doanh xuất nhập khẩu",
    key: "KT472",
    weight: 2,
  },
  {
    name: "Thương mại nông nghiệp quốc tế",
    key: "KT475",
    weight: 3
  },
  {
    name: "Toán tài chính",
    key: "KT476",
    weight: 2
  },
  {
    name: "Tổ chức thực hiện công tác kế toán",
    key: "KT477",
    weight: 3,
  },
  {
    name: "Quản trị tài chính trong doanh nghiệp nông nghiệp",
    key: "KT478",
    weight: 2,
  },
  {
    name: "Phương pháp nghiên cứu trong kinh doanh",
    key: "KT479",
    weight: 3,
  },
  {
    name: "Phân tích định tính trong kinh doanh",
    key: "KT480",
    weight: 2,
  },
  {
    name: "Phương pháp phân tích trong nghiên cứu du lịch",
    key: "KT481",
    weight: 3,
  },
  {
    name: "Quản trị mua hàng và lưu kho",
    key: "KT482",
    weight: 2
  },
  {
    name: "Tổ chức sự kiện và lễ hội",
    key: "KT483",
    weight: 3
  },
  {
    name: "Thực tập Nghiệp vụ ngoại thương và Logistic",
    key: "KT484",
    weight: 2,
  },
  {
    name: "Đầu tư tài chính",
    key: "KT485",
    weight: 3
  },
  {
    name: "Vi sinh đại cương",
    key: "MI301C",
    weight: 3
  },
  {
    name: "Thực hành vi sinh đại cương",
    key: "MI302C",
    weight: 1
  },
  {
    name: "Tư tưởng Hồ Chí Minh",
    key: "ML006",
    weight: 2
  },
  {
    name: "Logic học đại cương",
    key: "ML007",
    weight: 2
  },
  {
    name: "Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 1",
    key: "ML009",
    weight: 2,
  },
  {
    name: "Những nguyên lý cơ bản của chủ nghĩa Mác-Lênin 2",
    key: "ML010",
    weight: 3,
  },
  {
    name: "Đường lối cách mạng của Đảng cộng sản Việt Nam",
    key: "ML011",
    weight: 3,
  },
  {
    name: "Triết học Mác - Lênin",
    key: "ML014",
    weight: 3
  },
  {
    name: "Triết học Mác - Lênin",
    key: "ML015",
    weight: 4
  },
  {
    name: "Kinh tế chính trị Mác - Lênin",
    key: "ML016",
    weight: 2
  },
  {
    name: "Kinh tế chính trị Mác - Lênin",
    key: "ML017",
    weight: 3
  },
  {
    name: "Chủ nghĩa xã hội khoa học",
    key: "ML018",
    weight: 2
  },
  {
    name: "Lịch sử Đảng Cộng sản Việt Nam",
    key: "ML019",
    weight: 2
  },
  {
    name: "Lịch sử Đảng Cộng sản Việt Nam",
    key: "ML020",
    weight: 3
  },
  {
    name: "Tư tưởng Hồ Chí Minh",
    key: "ML021",
    weight: 2
  },
  {
    name: "Lịch sử Triết học",
    key: "ML103",
    weight: 2
  },
  {
    name: "Lịch sử tư tưởng xã hội chủ nghĩa",
    key: "ML105",
    weight: 2,
  },
  {
    name: "Tập giảng - GDCD",
    key: "ML110",
    weight: 2
  },
  {
    name: "Thực tập sư phạm - Giáo dục công dân",
    key: "ML133",
    weight: 3,
  },
  {
    name: "Lịch sử tư tưởng chính trị",
    key: "ML139",
    weight: 3
  },
  {
    name: "Anh văn chuyên môn khoa học lý luận chính trị 1",
    key: "ML198",
    weight: 4,
  },
  {
    name: "Anh văn chuyên môn khoa học lý luận chính trị 2",
    key: "ML199",
    weight: 3,
  },
  {
    name: "Chính sách đối ngoại của Đảng và Nhà nước Việt Nam",
    key: "ML203",
    weight: 2,
  },
  {
    name: "Chủ nghĩa Mác-Lênin về sở hữu và cách mạng khoa học công nghệ",
    key: "ML205",
    weight: 2,
  },
  {
    name: "Chuyên đề Triết học Mác-Lênin",
    key: "ML207",
    weight: 2
  },
  {
    name: "Học thuyết về nhà nước và nhà nước pháp quyền của chủ nghĩa Mác-Lênin",
    key: "ML209",
    weight: 2,
  },
  {
    name: "Lịch sử triết học Tây Âu thời trung cổ",
    key: "ML214",
    weight: 2,
  },
  {
    name: "Lịch sử triết học Trung Hoa - cổ trung đại",
    key: "ML215",
    weight: 4,
  },
  {
    name: "Niên luận Chính trị học 1",
    key: "ML219",
    weight: 2
  },
  {
    name: "Niên luận Chính trị học 2",
    key: "ML220",
    weight: 2
  },
  {
    name: "Chuyên đề Chủ nghĩa xã hội khoa học",
    key: "ML221",
    weight: 2,
  },
  {
    name: "Phương pháp nghiên cứu khoa học lý luận chính trị",
    key: "ML223",
    weight: 2,
  },
  {
    name: "Thống kê cho khoa học xã hội",
    key: "ML226",
    weight: 2
  },
  {
    name: "Thực tế ngoài trường khoa học chính trị",
    key: "ML227",
    weight: 2,
  },
  {
    name: "Chuyên đề Lịch sử Đảng Cộng sản Việt Nam",
    key: "ML228",
    weight: 2,
  },
  {
    name: "Niên luận Triết học Mác-Lênin",
    key: "ML229",
    weight: 1
  },
  {
    name: "Triết học phương Tây hiện đại",
    key: "ML230",
    weight: 3
  },
  {
    name: "Quyền lực chính trị",
    key: "ML238",
    weight: 3
  },
  {
    name: "Niên luận lịch sử Triết học",
    key: "ML239",
    weight: 2
  },
  {
    name: "Niên luận Triết học duy vật biện chứng",
    key: "ML240",
    weight: 2,
  },
  {
    name: "Niên luận Triết học duy vật lịch sử",
    key: "ML241",
    weight: 2,
  },
  {
    name: "Niên luận Chủ nghĩa xã hội khoa học",
    key: "ML243",
    weight: 1,
  },
  {
    name: "Đạo đức học",
    key: "ML312",
    weight: 3
  },
  {
    name: "Phương pháp giảng dạy - GDCD",
    key: "ML313",
    weight: 2
  },
  {
    name: "Những vấn đề thời đại ngày nay",
    key: "ML316",
    weight: 2
  },
  {
    name: "Xây dựng Đảng",
    key: "ML319",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - GDCD",
    key: "ML327",
    weight: 10
  },
  {
    name: "Lịch sử triết học Mác - Lênin",
    key: "ML344",
    weight: 2
  },
  {
    name: "Chuyên đề phép biện chứng duy vật",
    key: "ML350",
    weight: 3,
  },
  {
    name: "Niên luận đường lối cách mạng của Đảng Cộng sản Việt Nam",
    key: "ML357",
    weight: 1,
  },
  {
    name: "Chính trị học",
    key: "ML358",
    weight: 3
  },
  {
    name: "Thể chế chính trị thế giới đương đại",
    key: "ML359",
    weight: 3,
  },
  {
    name: "Chính trị học phát triển",
    key: "ML364",
    weight: 3
  },
  {
    name: "Chính sách công",
    key: "ML366",
    weight: 2
  },
  {
    name: "Niên luận chính trị học",
    key: "ML371",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Chính trị học",
    key: "ML374",
    weight: 10,
  },
  {
    name: "Tiểu luận tốt nghiệp - Chính trị học",
    key: "ML375",
    weight: 4,
  },
  {
    name: "Luận văn tốt nghiệp - Triết học",
    key: "ML401",
    weight: 10
  },
  {
    name: "Tiểu luận tốt nghiệp - Triết học",
    key: "ML402",
    weight: 4
  },
  {
    name: "Bộ gen vi sinh vật",
    key: "MM433C",
    weight: 2
  },
  {
    name: "TT. Bộ gen vi sinh vật",
    key: "MM434C",
    weight: 1
  },
  {
    name: "Sinh thái học cơ bản",
    key: "MT101",
    weight: 2
  },
  {
    name: "TT. Sinh thái học cơ bản",
    key: "MT102",
    weight: 1
  },
  {
    name: "Luật và chính sách môi trường",
    key: "MT103",
    weight: 2
  },
  {
    name: "Địa chất môi trường",
    key: "MT105",
    weight: 2
  },
  {
    name: "Hệ sinh thái nông nghiệp",
    key: "MT110",
    weight: 2
  },
  {
    name: "Hệ sinh thái thủy vực",
    key: "MT112",
    weight: 2
  },
  {
    name: "TT. Hệ sinh thái thủy vực",
    key: "MT113",
    weight: 1
  },
  {
    name: "Hệ sinh thái rừng",
    key: "MT114",
    weight: 2
  },
  {
    name: "Môi trường và quản lý tài nguyên thiên nhiên",
    key: "MT117",
    weight: 2,
  },
  {
    name: "Kỹ thuật truyền thông môi trường",
    key: "MT118",
    weight: 2
  },
  {
    name: "Năng lượng và môi trường",
    key: "MT123",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn Kỹ thuật môi trường",
    key: "MT124",
    weight: 2,
  },
  {
    name: "Sinh hóa - KTMT",
    key: "MT137",
    weight: 2
  },
  {
    name: "Quản lý tài nguyên đất đai",
    key: "MT145",
    weight: 2
  },
  {
    name: "Hóa môi trường ứng dụng",
    key: "MT150",
    weight: 2
  },
  {
    name: "Trắc địa đại cương",
    key: "MT155",
    weight: 3
  },
  {
    name: "Nông nghiệp đô thị",
    key: "MT157",
    weight: 2
  },
  {
    name: "Quản lý đô thị",
    key: "MT158",
    weight: 2
  },
  {
    name: "Công nghệ môi trường đại cương",
    key: "MT161",
    weight: 2
  },
  {
    name: "Quản lý và sử dụng tiết kiệm năng lượng",
    key: "MT165",
    weight: 2,
  },
  {
    name: "Đo đạc địa chính",
    key: "MT197",
    weight: 3
  },
  {
    name: "Anh văn chuyên ngành tài nguyên và môi trường",
    key: "MT199",
    weight: 2,
  },
  {
    name: "Kỹ thuật xử lý nước cấp",
    key: "MT200",
    weight: 3
  },
  {
    name: "Biogas và bảo vệ môi trường",
    key: "MT208",
    weight: 2
  },
  {
    name: "Quản lý nhà nước về đất đai",
    key: "MT220",
    weight: 2
  },
  {
    name: "Quy hoạch phát triển vùng và đô thị",
    key: "MT221",
    weight: 2,
  },
  {
    name: "Phát triển bền vững tài nguyên đất đai",
    key: "MT222",
    weight: 2,
  },
  {
    name: "Mô hình hóa trong quản lý đất đai",
    key: "MT223",
    weight: 2,
  },
  {
    name: "Đồ họa và thiết kế cảnh quan đô thị",
    key: "MT224",
    weight: 3,
  },
  {
    name: "Kỹ năng chuyên ngành",
    key: "MT225",
    weight: 2
  },
  {
    name: "Thống kê địa lý",
    key: "MT226",
    weight: 2
  },
  {
    name: "Quản lý và giảm nhẹ thiên tai",
    key: "MT228",
    weight: 2
  },
  {
    name: "Kinh tế tài nguyên đất đai",
    key: "MT229",
    weight: 2
  },
  {
    name: "Phân tích sinh kế trong thay đổi sử dụng đất",
    key: "MT231",
    weight: 2,
  },
  {
    name: "Kỹ thuật xử lý ô nhiễm không khí và tiếng Ồn",
    key: "MT232",
    weight: 3,
  },
  {
    name: "Chuyển hóa và lan truyền ô nhiễm",
    key: "MT239",
    weight: 2
  },
  {
    name: "Phương pháp điều tra thông tin tài nguyên đất đai",
    key: "MT240",
    weight: 2,
  },
  {
    name: "TT. Xử lý nước cấp và nước thải",
    key: "MT244",
    weight: 2
  },
  {
    name: "An toàn, sức khỏe và môi trường",
    key: "MT245",
    weight: 2
  },
  {
    name: "Cơ sở biến đổi khí hậu",
    key: "MT246",
    weight: 2
  },
  {
    name: "Công nghệ sinh học trong môi trường",
    key: "MT248",
    weight: 2,
  },
  {
    name: "Quản lý tổng hợp tài nguyên đất đai",
    key: "MT262",
    weight: 2,
  },
  {
    name: "Hệ thống thông tin địa lý và định vị toàn cầu (GIS-GPS)",
    key: "MT266",
    weight: 3,
  },
  {
    name: "Kỹ thuật chỉnh trị sông ngòi",
    key: "MT285",
    weight: 2
  },
  {
    name: "Đồ án kiểm soát ô nhiễm nguồn nước",
    key: "MT287",
    weight: 2,
  },
  {
    name: "Sinh thái môi trường ứng dụng",
    key: "MT301",
    weight: 2
  },
  {
    name: "Quản lý chất lượng môi trường",
    key: "MT309",
    weight: 2
  },
  {
    name: "Quản lý môi trường",
    key: "MT311",
    weight: 2
  },
  {
    name: "Bảo tồn đa dạng sinh học",
    key: "MT312",
    weight: 2
  },
  {
    name: "TT. Bảo tồn đa dạng sinh học",
    key: "MT313",
    weight: 1
  },
  {
    name: "Quản lý môi trường và tài nguyên biển",
    key: "MT316",
    weight: 2,
  },
  {
    name: "Phát triển bền vững",
    key: "MT319",
    weight: 2
  },
  {
    name: "Quản lý đất ngập nước",
    key: "MT324",
    weight: 2
  },
  {
    name: "Ô nhiễm đất và kỹ thuật phục hồi",
    key: "MT330",
    weight: 2
  },
  {
    name: "Xã hội và môi trường",
    key: "MT332",
    weight: 2
  },
  {
    name: "Quản lý tài nguyên trên cơ sở phát triển cộng đồng",
    key: "MT334",
    weight: 2,
  },
  {
    name: "Kỹ thuật xử lý nước thải",
    key: "MT338",
    weight: 3
  },
  {
    name: "TT. Kỹ thuật xử lý nước thải",
    key: "MT339",
    weight: 1
  },
  {
    name: "Quản lý tài nguyên nước",
    key: "MT340",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - KHMT",
    key: "MT341",
    weight: 10
  },
  {
    name: "Đánh giá tác động môi trường",
    key: "MT342",
    weight: 2
  },
  {
    name: "Quản lý và xử lý chất thải độc hại",
    key: "MT346",
    weight: 2,
  },
  {
    name: "Kỹ thuật xử lý nước thải",
    key: "MT347",
    weight: 3
  },
  {
    name: "Quản lý và xử lý chất thải rắn",
    key: "MT350",
    weight: 2
  },
  {
    name: "Quy hoạch môi trường",
    key: "MT358",
    weight: 2
  },
  {
    name: "Quản lý kỹ thuật",
    key: "MT360",
    weight: 2
  },
  {
    name: "Quản lý và tái sử dụng chất thải hữu cơ",
    key: "MT361",
    weight: 2,
  },
  {
    name: "Quản lý môi trường nông nghiệp",
    key: "MT366",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - KTMT",
    key: "MT368",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - KTMT",
    key: "MT369",
    weight: 10
  },
  {
    name: "Kiểm toán môi trường",
    key: "MT374",
    weight: 2
  },
  {
    name: "Thực tập ngành nghề - QLMT",
    key: "MT375",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - QLMT",
    key: "MT376",
    weight: 10
  },
  {
    name: "Đồ án xử lý ô nhiễm không khí",
    key: "MT390",
    weight: 2
  },
  {
    name: "Đồ án xử lý nước cấp và nước thải",
    key: "MT391",
    weight: 2,
  },
  {
    name: "Đồ án quản lý và xử lý chất thải rắn",
    key: "MT392",
    weight: 2,
  },
  {
    name: "Đồ án công trình xử lý môi trường",
    key: "MT393",
    weight: 2,
  },
  {
    name: "Tiểu luận tốt nghiệp - QLMT",
    key: "MT396",
    weight: 4
  },
  {
    name: "Báo cáo chuyên đề - QLĐĐ",
    key: "MT404",
    weight: 2
  },
  {
    name: "Báo cáo chuyên đề - QLMT",
    key: "MT405",
    weight: 2
  },
  {
    name: "Phương pháp nghiên cứu khoa học TN&MT",
    key: "MT418",
    weight: 2,
  },
  {
    name: "Quy hoạch sử dụng đất",
    key: "MT419",
    weight: 3
  },
  {
    name: "Vi sinh môi trường",
    key: "MT421",
    weight: 2
  },
  {
    name: "TT. Vi sinh học môi trường",
    key: "MT422",
    weight: 2
  },
  {
    name: "Thực tập phân tích và đánh giá chất lượng môi trường đất",
    key: "MT426",
    weight: 2,
  },
  {
    name: "Thực tập phân tích và đánh giá chất lượng môi trường nước",
    key: "MT427",
    weight: 2,
  },
  {
    name: "TT. Quản lý chất lượng môi trường",
    key: "MT435",
    weight: 2,
  },
  {
    name: "TT. Quản lý và xử lý chất thải",
    key: "MT436",
    weight: 2
  },
  {
    name: "TT. Sinh thái học cơ bản",
    key: "MT437",
    weight: 2
  },
  {
    name: "TT. Ứng dụng GIS trong quản lý tài nguyên và môi trường",
    key: "MT438",
    weight: 2,
  },
  {
    name: "TT. Giáo trình quản lý tài nguyên và môi trường",
    key: "MT441",
    weight: 3,
  },
  {
    name: "Đồ họa chuyên ngành - KTMT",
    key: "MT442",
    weight: 3
  },
  {
    name: "TT. Đánh giá tác động môi trường",
    key: "MT447",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - KTTNN",
    key: "MT450",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - KTMT",
    key: "MT502",
    weight: 14
  },
  {
    name: "Kỹ năng mềm",
    key: "NN100",
    weight: 2
  },
  {
    name: "Chọn giống gia súc",
    key: "NN101",
    weight: 2
  },
  {
    name: "Cơ thể học gia súc",
    key: "NN102",
    weight: 2
  },
  {
    name: "Di truyền học động vật",
    key: "NN103",
    weight: 2
  },
  {
    name: "Dinh dưỡng gia súc",
    key: "NN104",
    weight: 2
  },
  {
    name: "Sinh lý gia súc",
    key: "NN105",
    weight: 3
  },
  {
    name: "Thức ăn gia súc",
    key: "NN107",
    weight: 2
  },
  {
    name: "Dược lý thú y",
    key: "NN110",
    weight: 2
  },
  {
    name: "Phương pháp nghiên cứu khoa học - Nông nghiệp",
    key: "NN111",
    weight: 2,
  },
  {
    name: "Miễn dịch học",
    key: "NN112",
    weight: 2
  },
  {
    name: "Ngoại khoa gia súc",
    key: "NN113",
    weight: 2
  },
  {
    name: "Tin học ứng dụng - CNTY",
    key: "NN114",
    weight: 2
  },
  {
    name: "Vi sinh trong chăn nuôi",
    key: "NN118",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn - Thú y",
    key: "NN120",
    weight: 2
  },
  {
    name: "Giải phẩu bệnh lý",
    key: "NN121",
    weight: 3
  },
  {
    name: "Sinh hóa A",
    key: "NN122",
    weight: 3
  },
  {
    name: "Sinh hóa B",
    key: "NN123",
    weight: 2
  },
  {
    name: "TT. Sinh hóa",
    key: "NN124",
    weight: 1
  },
  {
    name: "Nhiệt kỹ thuật",
    key: "NN125",
    weight: 2
  },
  {
    name: "Di truyền học đại cương",
    key: "NN126",
    weight: 2
  },
  {
    name: "TT. Di truyền học đại cương",
    key: "NN127",
    weight: 1
  },
  {
    name: "Sinh lý thực vật B",
    key: "NN129",
    weight: 2
  },
  {
    name: "TT. Sinh lý thực vật",
    key: "NN130",
    weight: 1
  },
  {
    name: "Thổ nhưỡng B",
    key: "NN131",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn - KHCT",
    key: "NN134",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn giống cây trồng",
    key: "NN135",
    weight: 2,
  },
  {
    name: "Hóa bảo vệ thực vật A",
    key: "NN138",
    weight: 3
  },
  {
    name: "Anh văn chuyên môn hoa viên và cây cảnh",
    key: "NN142",
    weight: 2,
  },
  {
    name: "Hóa bảo vệ thực vật B",
    key: "NN143",
    weight: 2
  },
  {
    name: "Hóa học thực phẩm",
    key: "NN144",
    weight: 2
  },
  {
    name: "TT. Hóa học thực phẩm",
    key: "NN145",
    weight: 1
  },
  {
    name: "Phụ gia trong chế biến thực phẩm",
    key: "NN151",
    weight: 2
  },
  {
    name: "Vật lý học thực phẩm",
    key: "NN152",
    weight: 2
  },
  {
    name: "Thống kê phép thí nghiệm - CNTP",
    key: "NN153",
    weight: 2
  },
  {
    name: "Hình họa và vẽ kỹ thuật",
    key: "NN155",
    weight: 2
  },
  {
    name: "Tin học ứng dụng - CNTP",
    key: "NN157",
    weight: 2
  },
  {
    name: "Anh văn chuyên ngành - CNTP",
    key: "NN158",
    weight: 2
  },
  {
    name: "Anh văn chuyên ngành khoa học đất",
    key: "NN161",
    weight: 2,
  },
  {
    name: "Đồ án Kỹ thuật thực phẩm",
    key: "NN164",
    weight: 2
  },
  {
    name: "Phương pháp nghiên cứu khoa học - CNTP",
    key: "NN165",
    weight: 2,
  },
  {
    name: "An toàn và ô nhiễm trong sản xuất thực phẩm",
    key: "NN166",
    weight: 2,
  },
  {
    name: "Nước cấp, nước thải kỹ nghệ",
    key: "NN167",
    weight: 2
  },
  {
    name: "Xác suất thống kê và phép thí nghiệm - CNTY",
    key: "NN172",
    weight: 3,
  },
  {
    name: "Dược lý thú y",
    key: "NN173",
    weight: 3
  },
  {
    name: "Sinh lý bệnh thú y",
    key: "NN174",
    weight: 2
  },
  {
    name: "Quản lý và khai thác tài nguyên đất đai",
    key: "NN176",
    weight: 2,
  },
  {
    name: "Côn trùng đại cương",
    key: "NN178",
    weight: 3
  },
  {
    name: "Nguyên lý bảo quản và chế biến thực phẩm",
    key: "NN180",
    weight: 2,
  },
  {
    name: "Xác suất thống kê và phép thí nghiệm - KHCT",
    key: "NN184",
    weight: 3,
  },
  {
    name: "Cây lúa",
    key: "NN186",
    weight: 3
  },
  {
    name: "Cây rau",
    key: "NN187",
    weight: 3
  },
  {
    name: "Kỹ thuật Bonsai",
    key: "NN193",
    weight: 2
  },
  {
    name: "Thực tập giáo trình - KHCT",
    key: "NN195",
    weight: 2
  },
  {
    name: "Chọn giống cây công nghiệp ngắn ngày",
    key: "NN196",
    weight: 2,
  },
  {
    name: "Tham quan cơ sở sản xuất - GCT",
    key: "NN198",
    weight: 2
  },
  {
    name: "Sinh thái đất",
    key: "NN200",
    weight: 2
  },
  {
    name: "Dinh dưỡng người",
    key: "NN207",
    weight: 2
  },
  {
    name: "Công nghệ chế biến sữa và sản phẩm sữa",
    key: "NN217",
    weight: 2,
  },
  {
    name: "Công nghệ chế biến thủy và hải sản",
    key: "NN219",
    weight: 2,
  },
  {
    name: "Bao bì thực phẩm",
    key: "NN226",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - CNTP",
    key: "NN229",
    weight: 10
  },
  {
    name: "Thổ nhưỡng A",
    key: "NN230",
    weight: 3
  },
  {
    name: "Quản lý thông tin đất đai LIS-LIM",
    key: "NN250",
    weight: 3,
  },
  {
    name: "Quy hoạch và phát triển nông thôn",
    key: "NN255",
    weight: 2,
  },
  {
    name: "Lưu trữ và quản lý hồ sơ địa chính",
    key: "NN257",
    weight: 2,
  },
  {
    name: "Phân hạng và định giá đất",
    key: "NN259",
    weight: 2
  },
  {
    name: "Kiểm kê và chỉnh lý biến động đất đai",
    key: "NN262",
    weight: 2,
  },
  {
    name: "Luận văn tốt nghiệp - QLĐĐ",
    key: "NN275",
    weight: 10
  },
  {
    name: "Nông nghiệp sạch và bền vững",
    key: "NN286",
    weight: 2
  },
  {
    name: "Viễn thám đại cương",
    key: "NN288",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - KHD",
    key: "NN293",
    weight: 10
  },
  {
    name: "Công nghệ chế biến chè, cà phê, ca cao",
    key: "NN296",
    weight: 2,
  },
  {
    name: "Hệ quản trị cơ sở dữ liệu địa chính",
    key: "NN297",
    weight: 2,
  },
  {
    name: "Viễn thám ứng dụng",
    key: "NN298",
    weight: 2
  },
  {
    name: "Quản lý và phân tích thị trường bất động sản",
    key: "NN299",
    weight: 3,
  },
  {
    name: "Dịch tễ học",
    key: "NN303",
    weight: 2
  },
  {
    name: "Bệnh dinh dưỡng",
    key: "NN304",
    weight: 2
  },
  {
    name: "Chăn nuôi gia súc nhai lại A",
    key: "NN306",
    weight: 3
  },
  {
    name: "Chăn nuôi heo A",
    key: "NN307",
    weight: 3
  },
  {
    name: "Chăn nuôi ong",
    key: "NN308",
    weight: 2
  },
  {
    name: "Quản lý sản xuất chăn nuôi",
    key: "NN309",
    weight: 2
  },
  {
    name: "Chăn nuôi chó, mèo",
    key: "NN310",
    weight: 2
  },
  {
    name: "Bệnh ký sinh gia súc",
    key: "NN311",
    weight: 2
  },
  {
    name: "Chăn nuôi động vật hoang dã",
    key: "NN316",
    weight: 2
  },
  {
    name: "Nuôi động vật thí nghiệm",
    key: "NN317",
    weight: 2
  },
  {
    name: "Vệ sinh môi trường chăn nuôi",
    key: "NN318",
    weight: 2
  },
  {
    name: "Chăn nuôi thỏ",
    key: "NN319",
    weight: 2
  },
  {
    name: "Xây dựng chuồng trại",
    key: "NN320",
    weight: 2
  },
  {
    name: "Kiểm nghiệm sản phẩm động vật",
    key: "NN322",
    weight: 2
  },
  {
    name: "Luật Thú y",
    key: "NN323",
    weight: 2
  },
  {
    name: "Vệ sinh Thú y",
    key: "NN324",
    weight: 2
  },
  {
    name: "Hệ thống chăn nuôi",
    key: "NN325",
    weight: 2
  },
  {
    name: "Khuyến nông",
    key: "NN326",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - CNTY",
    key: "NN330",
    weight: 10
  },
  {
    name: "Bệnh truyền nhiễm gia súc và gia cầm",
    key: "NN331",
    weight: 3,
  },
  {
    name: "Bệnh ký sinh gia súc và gia cầm",
    key: "NN333",
    weight: 3
  },
  {
    name: "Bệnh thú hoang dã",
    key: "NN335",
    weight: 2
  },
  {
    name: "Chăn nuôi dê",
    key: "NN336",
    weight: 2
  },
  {
    name: "Chăn nuôi gia cầm B",
    key: "NN337",
    weight: 2
  },
  {
    name: "Chăn nuôi gia súc nhai lại B",
    key: "NN338",
    weight: 2
  },
  {
    name: "Chăn nuôi heo B",
    key: "NN339",
    weight: 2
  },
  {
    name: "Độc chất học thú y",
    key: "NN341",
    weight: 2
  },
  {
    name: "Quản lý dịch bệnh trên đàn gia súc",
    key: "NN344",
    weight: 2,
  },
  {
    name: "Sản khoa gia súc",
    key: "NN345",
    weight: 3
  },
  {
    name: "Thụ tinh nhân tạo",
    key: "NN346",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Thú y",
    key: "NN351",
    weight: 10
  },
  {
    name: "Dinh dưỡng và thức ăn gia súc",
    key: "NN353",
    weight: 2
  },
  {
    name: "Bảo quản sau thu hoạch",
    key: "NN358",
    weight: 2
  },
  {
    name: "Bệnh cây trồng",
    key: "NN359",
    weight: 2
  },
  {
    name: "Cây ăn trái",
    key: "NN361",
    weight: 2
  },
  {
    name: "Cây công nghiệp dài ngày",
    key: "NN362",
    weight: 2
  },
  {
    name: "Cây công nghiệp ngắn ngày",
    key: "NN363",
    weight: 2
  },
  {
    name: "Cây lúa",
    key: "NN369",
    weight: 2
  },
  {
    name: "Cây màu",
    key: "NN370",
    weight: 2
  },
  {
    name: "Cây rau",
    key: "NN371",
    weight: 2
  },
  {
    name: "Chọn giống cây trồng",
    key: "NN373",
    weight: 2
  },
  {
    name: "Côn trùng nông nghiệp",
    key: "NN374",
    weight: 2
  },
  {
    name: "Công nghệ sinh học trong nông nghiệp",
    key: "NN375",
    weight: 2,
  },
  {
    name: "Dinh dưỡng cây trồng",
    key: "NN376",
    weight: 2
  },
  {
    name: "Hệ thống canh tác",
    key: "NN377",
    weight: 2
  },
  {
    name: "IPM trong bảo vệ thực vật",
    key: "NN378",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Giống CT",
    key: "NN379",
    weight: 10
  },
  {
    name: "Nấm ăn",
    key: "NN381",
    weight: 2
  },
  {
    name: "Sinh lý Stress thực vật",
    key: "NN388",
    weight: 2
  },
  {
    name: "Thực hành nông nghiệp tốt (GAP)",
    key: "NN390",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - KHCT",
    key: "NN402",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - Nông học",
    key: "NN403",
    weight: 10
  },
  {
    name: "Cỏ dại",
    key: "NN414",
    weight: 2
  },
  {
    name: "TT. Cỏ dại",
    key: "NN415",
    weight: 1
  },
  {
    name: "Động vật hại trong nông nghiệp",
    key: "NN416",
    weight: 2
  },
  {
    name: "TT. Động vật hại nông nghiệp",
    key: "NN417",
    weight: 1
  },
  {
    name: "Thực tập giáo trình - BVTV",
    key: "NN420",
    weight: 2
  },
  {
    name: "Phòng trừ sinh học côn trùng",
    key: "NN427",
    weight: 2
  },
  {
    name: "Vi sinh vật và chuyển hóa vật chất trong đất",
    key: "NN428",
    weight: 2,
  },
  {
    name: "Phòng trừ sinh học bệnh cây trồng",
    key: "NN429",
    weight: 2,
  },
  {
    name: "Bệnh sau thu hoạch",
    key: "NN434",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - BVTV",
    key: "NN436",
    weight: 10
  },
  {
    name: "Bệnh cây - HV và CC",
    key: "NN439",
    weight: 2
  },
  {
    name: "Kiến trúc phong cảnh",
    key: "NN446",
    weight: 2
  },
  {
    name: "Quy hoạch, thiết kế và bảo dưỡng cảnh quan",
    key: "NN448",
    weight: 2,
  },
  {
    name: "Hệ thống tưới tiêu",
    key: "NN450",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - RHQ&CQ",
    key: "NN463",
    weight: 10
  },
  {
    name: "Kỹ thuật nhân giống rau hoa quả và quản lý vườn ươm",
    key: "NN464",
    weight: 2,
  },
  {
    name: "Quản lý dịch hại rau hoa quả",
    key: "NN473",
    weight: 2
  },
  {
    name: "Cây dược liệu",
    key: "NN477",
    weight: 2
  },
  {
    name: "Hệ sinh thái đất ngập nước",
    key: "NN486",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Lâm sinh",
    key: "NN488",
    weight: 10
  },
  {
    name: "Thực hành chăn nuôi tốt (GAHP)",
    key: "NN492",
    weight: 2
  },
  {
    name: "Công nghệ sinh học vật nuôi",
    key: "NN495",
    weight: 2
  },
  {
    name: "Quản lý giống vật nuôi",
    key: "NN496",
    weight: 2
  },
  {
    name: "Quyền lợi và tập tính học động vật",
    key: "NN499",
    weight: 2,
  },
  {
    name: "Đánh giá đất",
    key: "NN508",
    weight: 2
  },
  {
    name: "Công nghệ sinh học trong bảo vệ thực vật",
    key: "NN513",
    weight: 2,
  },
  {
    name: "Kỹ thuật trồng hoa và cây cảnh",
    key: "NN518",
    weight: 3
  },
  {
    name: "Phong thủy",
    key: "NN521",
    weight: 2
  },
  {
    name: "Phì nhiêu đất B",
    key: "NN529",
    weight: 2
  },
  {
    name: "Kiểm nghiệm dược",
    key: "NN532",
    weight: 2
  },
  {
    name: "Dược liệu",
    key: "NN533",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Dược TY",
    key: "NN537",
    weight: 10
  },
  {
    name: "Biến đổi khí hậu và sử dụng đất",
    key: "NN539",
    weight: 2
  },
  {
    name: "Khảo sát lập bản đồ đất",
    key: "NN540",
    weight: 2
  },
  {
    name: "Hoá lý đất",
    key: "NN541",
    weight: 3
  },
  {
    name: "Phì nhiêu đất",
    key: "NN542",
    weight: 3
  },
  {
    name: "Thực tập giáo trình Nông học",
    key: "NN548",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiêp - CNTY",
    key: "NN556",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - Dược TY",
    key: "NN558",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - Thú y",
    key: "NN560",
    weight: 4
  },
  {
    name: "Tiểu luận tốt nghiệp - RHQ&CQ",
    key: "NN561",
    weight: 4
  },
  {
    name: "Bệnh truyền nhiễm gia súc và gia cầm B",
    key: "NN569",
    weight: 3,
  },
  {
    name: "Luận văn tốt nghiệp - Thú y",
    key: "NN572",
    weight: 15
  },
  {
    name: "Thực tập nhận thức ngành nghề (ngoài trường)",
    key: "NS100",
    weight: 1,
  },
  {
    name: "Vi sinh học đại cương-BVTV",
    key: "NS101",
    weight: 3
  },
  {
    name: "Cây hoa kiểng",
    key: "NS102",
    weight: 2
  },
  {
    name: "Bệnh cây đại cương",
    key: "NS105",
    weight: 3
  },
  {
    name: "Cơ học lưu chất và vật liệu rời",
    key: "NS109",
    weight: 2
  },
  {
    name: "Tổng kê vật chất và năng lượng",
    key: "NS112",
    weight: 2
  },
  {
    name: "Thực tập kỹ thuật thực phẩm (PTN)",
    key: "NS113",
    weight: 2,
  },
  {
    name: "Kỹ thuật các quá trình sinh học trong chế biến thực phẩm",
    key: "NS114",
    weight: 2,
  },
  {
    name: "Miễn dịch học",
    key: "NS119",
    weight: 3
  },
  {
    name: "Kiểm nghiệm sản phẩm động vật",
    key: "NS120",
    weight: 3
  },
  {
    name: "Hóa lý – CNTP",
    key: "NS122H",
    weight: 3
  },
  {
    name: "Tổng kê vật chất và năng lượng",
    key: "NS123H",
    weight: 2
  },
  {
    name: "Sinh hoạt học thuật 1",
    key: "NS126H",
    weight: 1
  },
  {
    name: "Thiết kế thí nghiệm",
    key: "NS127H",
    weight: 2
  },
  {
    name: "Kỹ thuật lò hơi",
    key: "NS132",
    weight: 2
  },
  {
    name: "Cơ học lưu chất và vật liệu rời",
    key: "NS133",
    weight: 2
  },
  {
    name: "Mô hình hóa và mô phỏng trong CNTP",
    key: "NS135",
    weight: 2,
  },
  {
    name: "Đồ án quá trình và thiết bị CNTP",
    key: "NS137",
    weight: 2
  },
  {
    name: "Truyền nhiệt trong chế biến thực phẩm",
    key: "NS142",
    weight: 2,
  },
  {
    name: "Phương pháp nghiên cứu khoa học nông nghiệp - TY",
    key: "NS197",
    weight: 2,
  },
  {
    name: "Phương pháp nghiên cứu khoa học và thống kê phép thí nghiệm",
    key: "NS198",
    weight: 2,
  },
  {
    name: "TT. Chất điều hòa sinh trưởng thực vật",
    key: "NS202",
    weight: 1,
  },
  {
    name: "Sinh lý học thực vật ứng dụng",
    key: "NS208",
    weight: 2
  },
  {
    name: "TT. Sinh lý học ứng dụng",
    key: "NS209",
    weight: 1
  },
  {
    name: "Anh văn chuyên môn-SHƯD",
    key: "NS210",
    weight: 2
  },
  {
    name: "Công nghệ sau thu hoạch ngũ cốc",
    key: "NS223",
    weight: 2
  },
  {
    name: "Công nghệ sau thu hoạch rau quả",
    key: "NS224",
    weight: 2
  },
  {
    name: "Bảo vệ thực vật trong nông nghiệp công nghệ cao",
    key: "NS228",
    weight: 2,
  },
  {
    name: "Bệnh chó, mèo",
    key: "NS229",
    weight: 3
  },
  {
    name: "Bệnh truyền lây giữa động vật và người",
    key: "NS230",
    weight: 2,
  },
  {
    name: "Các quá trình hóa lý trong công nghệ thực phẩm",
    key: "NS231",
    weight: 3,
  },
  {
    name: "Các quá trình và thiết bị cơ bản trong bảo quản và chế biến thực phẩm 1",
    key: "NS232",
    weight: 2,
  },
  {
    name: "Các quá trình và thiết bị cơ bản trong bảo quản và chế biến thực phẩm 2",
    key: "NS233",
    weight: 2,
  },
  {
    name: "Chẩn đoán thú y",
    key: "NS234",
    weight: 3
  },
  {
    name: "Côn trùng gây hại sau thu hoạch",
    key: "NS238",
    weight: 2
  },
  {
    name: "Công nghệ chế biến rau củ quả",
    key: "NS239",
    weight: 2
  },
  {
    name: "Công nghệ sản xuất rượu bia và nước giải khát",
    key: "NS244",
    weight: 2,
  },
  {
    name: "Đánh giá cảm quan và thị hiếu người tiêu dùng",
    key: "NS248",
    weight: 2,
  },
  {
    name: "Đánh giá chất lượng đất",
    key: "NS249",
    weight: 2
  },
  {
    name: "Điện kỹ thuật",
    key: "NS250",
    weight: 2
  },
  {
    name: "Độc chất học thực phẩm",
    key: "NS251",
    weight: 2
  },
  {
    name: "Khảo nghiệm và kiểm định phân bón",
    key: "NS257",
    weight: 2,
  },
  {
    name: "Kỹ thuật thông gió kho bảo quản",
    key: "NS259",
    weight: 2
  },
  {
    name: "Luật chăn nuôi - thú y",
    key: "NS260",
    weight: 2
  },
  {
    name: "Nông nghiệp công nghệ cao",
    key: "NS264",
    weight: 2
  },
  {
    name: "Quản lý cây trồng tổng hợp (ICM)",
    key: "NS268",
    weight: 2
  },
  {
    name: "Quản lý chuỗi sản xuất thực phẩm",
    key: "NS269",
    weight: 2
  },
  {
    name: "Quản lý dịch bệnh trên động vật và Một sức khỏe",
    key: "NS270",
    weight: 2,
  },
  {
    name: "Seminar chuyên ngành",
    key: "NS274",
    weight: 2
  },
  {
    name: "Sinh hoạt học thuật ngành nghề",
    key: "NS275",
    weight: 2
  },
  {
    name: "Sinh học phân tử",
    key: "NS277",
    weight: 2
  },
  {
    name: "TT. Sinh học phân tử đại cương",
    key: "NS278",
    weight: 1
  },
  {
    name: "Thiết bị và dụng cụ thú y",
    key: "NS279",
    weight: 2
  },
  {
    name: "Truyền khối",
    key: "NS291",
    weight: 2
  },
  {
    name: "Truyền nhiệt",
    key: "NS292",
    weight: 2
  },
  {
    name: "Bệnh hại cây trồng 1",
    key: "NS293",
    weight: 3
  },
  {
    name: "Vi sinh thú y",
    key: "NS295",
    weight: 3
  },
  {
    name: "Vi sinh trong Chăn nuôi - Thú y",
    key: "NS296",
    weight: 2
  },
  {
    name: "Sinh học phân tử đại cương",
    key: "NS300",
    weight: 2
  },
  {
    name: "Côn trùng hại cây trồng 1",
    key: "NS301",
    weight: 3
  },
  {
    name: "Công nghệ bao bì và đóng gói thực phẩm",
    key: "NS301H",
    weight: 2,
  },
  {
    name: "Nguyên lý bảo quản và chế biến thực phẩm",
    key: "NS303H",
    weight: 2,
  },
  {
    name: "IPM trong bảo vệ thực vật 1",
    key: "NS304",
    weight: 2
  },
  {
    name: "Kỹ thuật chế biến nhiệt độ cao trong thực phẩm",
    key: "NS304H",
    weight: 2,
  },
  {
    name: "Tuyến trùng nông nghiệp",
    key: "NS307",
    weight: 2
  },
  {
    name: "Phương pháp giám định côn trùng hại cây trồng",
    key: "NS308",
    weight: 2,
  },
  {
    name: "Sinh hoạt học thuật 2",
    key: "NS308H",
    weight: 1
  },
  {
    name: "Phương pháp giám định bệnh hại cây trồng",
    key: "NS309",
    weight: 2,
  },
  {
    name: "Công nghệ chế biến thịt và thủy sản",
    key: "NS309H",
    weight: 3,
  },
  {
    name: "Virút hại thực vật",
    key: "NS310",
    weight: 2
  },
  {
    name: "Công nghệ chế biến các sản phẩm từ sữa và thức uống",
    key: "NS310H",
    weight: 3,
  },
  {
    name: "Anh văn chuyên môn - BVTV",
    key: "NS311",
    weight: 2
  },
  {
    name: "Công nghệ chế biến và bảo quản ngũ cốc",
    key: "NS311H",
    weight: 3,
  },
  {
    name: "Luật Bảo vệ và kiểm dịch thực vật",
    key: "NS312",
    weight: 2,
  },
  {
    name: "Kỹ năng giao tiếp trong nông nghiệp",
    key: "NS313",
    weight: 2,
  },
  {
    name: "Thực phẩm chức năng",
    key: "NS313H",
    weight: 2
  },
  {
    name: "Quản trị chuỗi chất lượng cung ứng thực phẩm",
    key: "NS315H",
    weight: 2,
  },
  {
    name: "Hóa học thực phẩm",
    key: "NS318",
    weight: 3
  },
  {
    name: "Quản lý chất lượng và Luật thực phẩm",
    key: "NS318H",
    weight: 2,
  },
  {
    name: "Vi sinh thực phẩm",
    key: "NS319",
    weight: 2
  },
  {
    name: "Mô học động vật",
    key: "NS320",
    weight: 3
  },
  {
    name: "Kỹ thuật chế biến nhiệt thực phẩm",
    key: "NS323",
    weight: 2,
  },
  {
    name: "Kỹ thuật lạnh thực phẩm",
    key: "NS324",
    weight: 2
  },
  {
    name: "Kỹ thuật lên men thực phẩm",
    key: "NS326",
    weight: 2
  },
  {
    name: "Thực tập kỹ thuật cơ sở công nghệ thực phẩm",
    key: "NS327",
    weight: 2,
  },
  {
    name: "Quản lý chất lượng và luật thực phẩm",
    key: "NS328",
    weight: 2,
  },
  {
    name: "Ngoại khoa gia súc",
    key: "NS329",
    weight: 3
  },
  {
    name: "Công nghệ chế biến đường - Bánh kẹo",
    key: "NS330",
    weight: 2,
  },
  {
    name: "Anh văn chuyên môn - CNTY",
    key: "NS343",
    weight: 2
  },
  {
    name: "Niên luận - CNTY",
    key: "NS345",
    weight: 1
  },
  {
    name: "Nội khoa gia súc",
    key: "NS349",
    weight: 3
  },
  {
    name: "Bệnh ký sinh gia súc và gia cầm B",
    key: "NS352",
    weight: 3,
  },
  {
    name: "Chẩn đoán cận lâm sàng",
    key: "NS353",
    weight: 2
  },
  {
    name: "Niên luận - TY",
    key: "NS354",
    weight: 1
  },
  {
    name: "Bệnh truyền nhiễm",
    key: "NS361",
    weight: 3
  },
  {
    name: "KT. Nhân giống cây xanh và quản lý vườn ươm",
    key: "NS367",
    weight: 2,
  },
  {
    name: "TT. Nhân giống cây xanh và quản lý vườn ươm",
    key: "NS368",
    weight: 1,
  },
  {
    name: "Nội khoa gia súc",
    key: "NS370",
    weight: 4
  },
  {
    name: "Bệnh truyền nhiễm gia súc và gia cầm",
    key: "NS372",
    weight: 4,
  },
  {
    name: "Bệnh ký sinh gia súc và gia cầm",
    key: "NS373",
    weight: 4
  },
  {
    name: "Ứng dụng các hoạt chất thiên nhiên",
    key: "NS374",
    weight: 2,
  },
  {
    name: "TT. Ứng dụng các hoạt chất thiên nhiên",
    key: "NS375",
    weight: 1,
  },
  {
    name: "Kỹ thuật sinh học",
    key: "NS376",
    weight: 2
  },
  {
    name: "TT. Kỹ thuật sinh học",
    key: "NS377",
    weight: 1
  },
  {
    name: "Phân tích sinh hóa hiện đại",
    key: "NS380",
    weight: 2
  },
  {
    name: "Vi sinh vật trong nông nghiệp",
    key: "NS381",
    weight: 2
  },
  {
    name: "Tế bào học ứng dụng",
    key: "NS382",
    weight: 2
  },
  {
    name: "Công nghệ sinh học thực vật",
    key: "NS383",
    weight: 2
  },
  {
    name: "Công nghệ sau thu hoạch rau hoa quả",
    key: "NS384",
    weight: 2,
  },
  {
    name: "Luận văn tốt nghiệp SHƯD",
    key: "NS385",
    weight: 10
  },
  {
    name: "Công nghệ chế biến sản phẩm từ ngũ cốc",
    key: "NS393",
    weight: 2,
  },
  {
    name: "Luận văn tốt nghiệp - CNSTH",
    key: "NS394",
    weight: 10
  },
  {
    name: "Tiểu luận tốt nghiệp - CNSTH",
    key: "NS395",
    weight: 4
  },
  {
    name: "Hệ thống canh tác nông nghiệp hiện đại",
    key: "NS401",
    weight: 2,
  },
  {
    name: "Ứng dụng cơ giới hoá trong nông nghiệp",
    key: "NS402",
    weight: 2,
  },
  {
    name: "Ứng dụng công nghệ cao trong quản lý nước cho cây trồng",
    key: "NS405",
    weight: 2,
  },
  {
    name: "Thu thập, điều khiển giám sát và ứng dụng dữ liệu lớn trong nông nghiệp",
    key: "NS406",
    weight: 2,
  },
  {
    name: "Ánh sáng nhân tạo ứng dụng trong nông nghiệp",
    key: "NS407",
    weight: 2,
  },
  {
    name: "Ứng dụng công nghệ blockchain trong truy xuất nguồn gốc sản phẩm",
    key: "NS408",
    weight: 2,
  },
  {
    name: "Quản lý và kiểm soát chất lượng sản phẩm",
    key: "NS409",
    weight: 2,
  },
  {
    name: "Công nghệ thông tin trong nông nghiệp",
    key: "NS423",
    weight: 2,
  },
  {
    name: "Thực tập kỹ thuật cơ sở công nghệ thực phẩm",
    key: "NS440",
    weight: 3,
  },
  {
    name: "Luận văn tốt nghiệp - BVTV",
    key: "NS501",
    weight: 14
  },
  {
    name: "Luận văn tốt nghiệp - CNTP",
    key: "NS503",
    weight: 14
  },
  {
    name: "Phát triển cộng đồng",
    key: "PD303",
    weight: 3
  },
  {
    name: "Tổ chức chính trị - xã hội - nghề nghiệp",
    key: "PD309",
    weight: 2,
  },
  {
    name: "Tiểu luận tốt nghiệp - Khuyến nông",
    key: "PD341",
    weight: 4,
  },
  {
    name: "Luận văn tốt nghiệp - KN",
    key: "PD591",
    weight: 10
  },
  {
    name: "Giáo dục quốc phòng và An ninh 1 (*)",
    key: "QP010",
    weight: 2,
  },
  {
    name: "Giáo dục quốc phòng và An ninh 2 (*)",
    key: "QP011",
    weight: 2,
  },
  {
    name: "Giáo dục quốc phòng và An ninh 3 (*)",
    key: "QP012",
    weight: 2,
  },
  {
    name: "Giáo dục quốc phòng và An ninh 4 (*)",
    key: "QP013",
    weight: 2,
  },
  {
    name: "Quản lý hành chính nhà nước và quản lý ngành giáo dục và đào tạo",
    key: "SG011",
    weight: 2,
  },
  {
    name: "Niên luận",
    key: "SG090",
    weight: 2
  },
  {
    name: "Phương pháp dạy học tin học",
    key: "SG093",
    weight: 3
  },
  {
    name: "Niên luận",
    key: "SG101",
    weight: 2
  },
  {
    name: "Toán cho Hóa học",
    key: "SG103",
    weight: 2
  },
  {
    name: "Phương pháp dạy học Lịch sử",
    key: "SG105",
    weight: 2
  },
  {
    name: "Phương pháp luận sử học",
    key: "SG109",
    weight: 2
  },
  {
    name: "Giáo dục so sánh và giáo dục bền vững",
    key: "SG114",
    weight: 2,
  },
  {
    name: "Hoạt động giáo dục trong nhà trường tiểu học",
    key: "SG115",
    weight: 2,
  },
  {
    name: "Ứng dụng công nghệ thông tin trong dạy học GDTH",
    key: "SG120",
    weight: 2,
  },
  {
    name: "Thực tập sư phạm giáo dục tiểu học",
    key: "SG126",
    weight: 3,
  },
  {
    name: "Môi trường và giáo dục môi trường Ở tiểu học",
    key: "SG128",
    weight: 2,
  },
  {
    name: "Sinh lý và bệnh lý trẻ em giáo dục tiểu học",
    key: "SG129",
    weight: 2,
  },
  {
    name: "Hoạt động giáo dục trong nhà trường phổ thông",
    key: "SG131",
    weight: 2,
  },
  {
    name: "Phương pháp dạy học Toán",
    key: "SG152",
    weight: 2
  },
  {
    name: "Thực tập sư phạm - Toán học",
    key: "SG160",
    weight: 3
  },
  {
    name: "Phương pháp dạy học Vật lý",
    key: "SG162",
    weight: 2
  },
  {
    name: "Thực tập Sư phạm Vật lý",
    key: "SG169",
    weight: 3
  },
  {
    name: "Ứng dụng công nghệ thông tin trong dạy học hóa học",
    key: "SG175",
    weight: 2,
  },
  {
    name: "Thực tập Sư phạm hóa học",
    key: "SG178",
    weight: 3
  },
  {
    name: "Ứng dụng công nghệ thông tin trong dạy học Sinh học",
    key: "SG184",
    weight: 2,
  },
  {
    name: "Thực tập Sư phạm Sinh học",
    key: "SG187",
    weight: 3
  },
  {
    name: "Vật lý cho Sinh học",
    key: "SG189",
    weight: 2
  },
  {
    name: "Phương pháp dạy học tiếng Anh",
    key: "SG196",
    weight: 2
  },
  {
    name: "Ứng dụng công nghệ thông tin trong dạy học tiếng Anh",
    key: "SG200",
    weight: 2,
  },
  {
    name: "Văn hóa các nước nói tiếng Anh",
    key: "SG201",
    weight: 2
  },
  {
    name: "Thực tập Sư phạm Ngữ Văn",
    key: "SG211",
    weight: 3
  },
  {
    name: "Văn học Việt Nam trung đại 3 (nửa cuối thế kỷ XIX)",
    key: "SG213",
    weight: 2,
  },
  {
    name: "Văn học Việt Nam hiện đại 2 (1930 - 1945)",
    key: "SG215",
    weight: 2,
  },
  {
    name: "Văn học châu Á",
    key: "SG218",
    weight: 3
  },
  {
    name: "Kỹ thuật và phương pháp dạy học kỹ thuật giáo dục tiểu học",
    key: "SG223",
    weight: 2,
  },
  {
    name: "Phương pháp dạy học tiếng Việt giáo dục tiểu học 2",
    key: "SG224",
    weight: 3,
  },
  {
    name: "Phương pháp dạy học toán 2 - GDTH",
    key: "SG226",
    weight: 3,
  },
  {
    name: "Cơ sở tự nhiên xã hội 1",
    key: "SG227",
    weight: 2
  },
  {
    name: "Điện học 2",
    key: "SG248",
    weight: 2
  },
  {
    name: "Thực tập Sư phạm tiếng Anh",
    key: "SG267",
    weight: 3
  },
  {
    name: "Viết báo cáo khoa học",
    key: "SG277",
    weight: 2
  },
  {
    name: "Ngữ pháp trung cấp",
    key: "SG280",
    weight: 2
  },
  {
    name: "Ngữ pháp nâng cao",
    key: "SG281",
    weight: 2
  },
  {
    name: "Ngữ âm thực hành nâng cao",
    key: "SG283",
    weight: 2
  },
  {
    name: "Âm vị học tiếng Anh",
    key: "SG284",
    weight: 2
  },
  {
    name: "Quá trình tiếp thu ngôn ngữ thứ hai",
    key: "SG285",
    weight: 2,
  },
  {
    name: "Ngôn ngữ học dẫn luận",
    key: "SG286",
    weight: 3
  },
  {
    name: "Cú pháp học",
    key: "SG288",
    weight: 2
  },
  {
    name: "Ngữ âm học tiếng Việt",
    key: "SG294",
    weight: 2
  },
  {
    name: "Từ pháp học tiếng Việt",
    key: "SG296",
    weight: 2
  },
  {
    name: "Lịch sử địa phương",
    key: "SG300",
    weight: 2
  },
  {
    name: "Thực tập Sư phạm Địa lý",
    key: "SG311",
    weight: 3
  },
  {
    name: "Kỹ thuật dạy học Địa lý",
    key: "SG312",
    weight: 3
  },
  {
    name: "Trắc địa cơ bản",
    key: "SG316",
    weight: 2
  },
  {
    name: "Khoa học Trái Đất",
    key: "SG317",
    weight: 2
  },
  {
    name: "Địa lý tự nhiên các châu 1",
    key: "SG323",
    weight: 2
  },
  {
    name: "Địa lý tự nhiên các châu 2",
    key: "SG324",
    weight: 2
  },
  {
    name: "Địa lý kinh tế - xã hội đại cương",
    key: "SG325",
    weight: 4,
  },
  {
    name: "Thực tế ngoài trường Địa lý",
    key: "SG326",
    weight: 3
  },
  {
    name: "Trò chơi trong dạy học tiếng Pháp",
    key: "SG347",
    weight: 2,
  },
  {
    name: "Tiểu luận tốt nghiệp giáo dục tiểu học",
    key: "SG351",
    weight: 4,
  },
  {
    name: "Ngữ âm tiếng Pháp",
    key: "SG362",
    weight: 3
  },
  {
    name: "Ngôn ngữ học đối chiếu - PV",
    key: "SG367",
    weight: 2
  },
  {
    name: "Tiếng Pháp nhà hàng và khách sạn",
    key: "SG369",
    weight: 2
  },
  {
    name: "Kỹ thuật biên dịch tư liệu - PV",
    key: "SG370",
    weight: 2
  },
  {
    name: "Giao tiếp điện tử tiếng Pháp",
    key: "SG371",
    weight: 2
  },
  {
    name: "Kỹ năng tìm việc - PV",
    key: "SG373",
    weight: 2
  },
  {
    name: "Tác phẩm văn học và thể loại văn học",
    key: "SG374",
    weight: 2,
  },
  {
    name: "Văn bản Hán văn Trung Quốc",
    key: "SG377",
    weight: 2
  },
  {
    name: "Thực tập Sư phạm Lịch sử",
    key: "SG380",
    weight: 3
  },
  {
    name: "Phương pháp dạy học tích hợp",
    key: "SG390",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp",
    key: "SG392",
    weight: 10
  },
  {
    name: "Giáo dục hòa nhập",
    key: "SG394",
    weight: 2
  },
  {
    name: "Cách mạng tư sản và sự phát triển của chủ nghĩa tư bản",
    key: "SG396",
    weight: 2,
  },
  {
    name: "Dạy học tác phẩm văn học theo thể loại - Tiểu học",
    key: "SG399",
    weight: 2,
  },
  {
    name: "Luận văn tốt nghiệp giáo dục tiểu học",
    key: "SG401",
    weight: 10,
  },
  {
    name: "Luận văn tốt nghiệp - SP. Sinh học",
    key: "SG405",
    weight: 10,
  },
  {
    name: "Dạy học trải nghiệm - Tiểu học",
    key: "SG406",
    weight: 2
  },
  {
    name: "Hoạt động trải nghiệm trong dạy học lịch sử",
    key: "SG407",
    weight: 2,
  },
  {
    name: "Lịch sử chủ quyền Việt Nam ở biển Đông",
    key: "SG408",
    weight: 2,
  },
  {
    name: "Lịch sử Thế giới cận đại 1",
    key: "SG410",
    weight: 2
  },
  {
    name: "Lịch sử Thế giới cổ trung đại 1",
    key: "SG411",
    weight: 2
  },
  {
    name: "Lịch sử Thế giới hiện đại 1",
    key: "SG413",
    weight: 2
  },
  {
    name: "Lịch sử Việt Nam cận đại 1",
    key: "SG415",
    weight: 2
  },
  {
    name: "Lịch sử Việt Nam cổ trung đại 1",
    key: "SG416",
    weight: 2
  },
  {
    name: "Lý luận dạy học giáo dục - Tiểu học",
    key: "SG418",
    weight: 2,
  },
  {
    name: "Lý luận dạy học Toán và Khoa học tự nhiên",
    key: "SG419",
    weight: 2,
  },
  {
    name: "Lý luận dạy học Ngữ văn và Khoa học xã hội",
    key: "SG420",
    weight: 2,
  },
  {
    name: "Đánh giá kết quả học tập Toán và Khoa học tự nhiên",
    key: "SG422",
    weight: 2,
  },
  {
    name: "Đánh giá kết quả học tập Ngữ văn và Khoa học xã hội",
    key: "SG423",
    weight: 2,
  },
  {
    name: "Văn học thiếu nhi",
    key: "SG425",
    weight: 3
  },
  {
    name: "Lý thuyết đồ thị và tổ hợp",
    key: "SG426",
    weight: 3
  },
  {
    name: "Phát triển chương trình giáo dục Ngữ văn và Khoa học xã hội",
    key: "SG429",
    weight: 2,
  },
  {
    name: "Phát triển chương trình giáo dục tiểu học",
    key: "SG430",
    weight: 2,
  },
  {
    name: "Phát triển chương trình giáo dục Toán và Khoa học tự nhiên",
    key: "SG431",
    weight: 2,
  },
  {
    name: "TT. Sinh học phân tử và tế bào",
    key: "SG434",
    weight: 1
  },
  {
    name: "Phương pháp dạy học khoa học tự nhiên và xã hội",
    key: "SG438",
    weight: 3,
  },
  {
    name: "Phương pháp nghiên cứu khoa học Giáo dục",
    key: "SG439",
    weight: 2,
  },
  {
    name: "Sinh học cơ thể",
    key: "SG448",
    weight: 2
  },
  {
    name: "Thực tế ngoài trường - Sư phạm Lịch sử",
    key: "SG452",
    weight: 2,
  },
  {
    name: "Văn bản thông tin và phương pháp dạy văn bản thông tin",
    key: "SG455",
    weight: 2,
  },
  {
    name: "Mỹ thuật và phương pháp dạy học Mỹ thuật",
    key: "SG458",
    weight: 2,
  },
  {
    name: "Thực tập giáo trình Sinh học",
    key: "SG460",
    weight: 2
  },
  {
    name: "Tâm lý học đại cương",
    key: "SP009",
    weight: 2
  },
  {
    name: "Tâm lý học sư phạm",
    key: "SP010",
    weight: 2
  },
  {
    name: "Địa chất đại cương",
    key: "SP015",
    weight: 2
  },
  {
    name: "Địa lý chính trị",
    key: "SP017",
    weight: 2
  },
  {
    name: "Phong tục tập quán lễ hội Việt Nam",
    key: "SP018",
    weight: 2,
  },
  {
    name: "Danh nhân đất Việt",
    key: "SP019",
    weight: 2
  },
  {
    name: "Lịch sử Việt Nam đại cương",
    key: "SP023",
    weight: 3
  },
  {
    name: "Lịch sử khẩn hoang Nam Bộ",
    key: "SP025",
    weight: 2
  },
  {
    name: "Giáo dục học - GDTH",
    key: "SP049",
    weight: 3
  },
  {
    name: "Lý thuyết tập hợp và logic toán",
    key: "SP061",
    weight: 2
  },
  {
    name: "Đại cương về Trái Đất",
    key: "SP075",
    weight: 2
  },
  {
    name: "Rèn luyện chữ viết - GDTH",
    key: "SP076",
    weight: 2
  },
  {
    name: "Giáo dục học",
    key: "SP079",
    weight: 3
  },
  {
    name: "Lý thuyết vành và trường",
    key: "SP085",
    weight: 3
  },
  {
    name: "Toán cho Vật lý 2",
    key: "SP092",
    weight: 3
  },
  {
    name: "Vật lý đại cương",
    key: "SP095",
    weight: 2
  },
  {
    name: "Cơ sở logic và lý thuyết tập hợp",
    key: "SP101",
    weight: 2
  },
  {
    name: "Đại số tuyến tính",
    key: "SP102",
    weight: 3
  },
  {
    name: "Số học",
    key: "SP103",
    weight: 2
  },
  {
    name: "Giải tích hàm nhiều biến",
    key: "SP112",
    weight: 3
  },
  {
    name: "Hình học giải tích",
    key: "SP113",
    weight: 2
  },
  {
    name: "Hàm phức",
    key: "SP115",
    weight: 2
  },
  {
    name: "Hình học sơ cấp",
    key: "SP116",
    weight: 3
  },
  {
    name: "Đại số sơ cấp",
    key: "SP117",
    weight: 3
  },
  {
    name: "Anh văn chuyên ngành - GDTH",
    key: "SP118",
    weight: 2
  },
  {
    name: "Lịch sử Toán",
    key: "SP130",
    weight: 2
  },
  {
    name: "Xác suất thống kê - GDTH",
    key: "SP132",
    weight: 2
  },
  {
    name: "Cơ học đại cương 1",
    key: "SP133",
    weight: 2
  },
  {
    name: "Thực tập Cơ nhiệt",
    key: "SP136",
    weight: 2
  },
  {
    name: "TT. Quang học",
    key: "SP140",
    weight: 1
  },
  {
    name: "Thực tế ngoài trường - Vật lý",
    key: "SP146",
    weight: 1
  },
  {
    name: "Anh văn chuyên môn Vật lý",
    key: "SP150",
    weight: 2
  },
  {
    name: "TT. Hóa lý",
    key: "SP158",
    weight: 2
  },
  {
    name: "Phân loại thực vật B",
    key: "SP169",
    weight: 2
  },
  {
    name: "Hình thái giải phẫu thực vật",
    key: "SP178",
    weight: 2
  },
  {
    name: "TT. Hình thái giải phẫu thực vật",
    key: "SP179",
    weight: 1
  },
  {
    name: "Động vật có xương sống",
    key: "SP180",
    weight: 2
  },
  {
    name: "TT. Động vật có xương sống",
    key: "SP181",
    weight: 1
  },
  {
    name: "Lịch sử văn minh Việt Nam",
    key: "SP200",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn Địa lý",
    key: "SP220",
    weight: 2
  },
  {
    name: "Khảo cổ học",
    key: "SP231",
    weight: 2
  },
  {
    name: "Dân tộc học đại cương",
    key: "SP232",
    weight: 2
  },
  {
    name: "Lịch sử Đông Nam Á",
    key: "SP233",
    weight: 2
  },
  {
    name: "Lý luận và lịch sử tôn giáo",
    key: "SP234",
    weight: 2
  },
  {
    name: "Lịch sử văn minh thế giới",
    key: "SP235",
    weight: 2
  },
  {
    name: "Lịch sử quan hệ quốc tế",
    key: "SP236",
    weight: 2
  },
  {
    name: "Tiếng Pháp du lịch",
    key: "SP258",
    weight: 2
  },
  {
    name: "Hình học xạ Ảnh",
    key: "SP314",
    weight: 2
  },
  {
    name: "Độ đo và tích phân Lơbe",
    key: "SP318",
    weight: 2
  },
  {
    name: "Môđun trên vành giao hoán",
    key: "SP321",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - Toán học",
    key: "SP333",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp-Toán học",
    key: "SP334",
    weight: 10
  },
  {
    name: "TT. Kỹ thuật điện 1",
    key: "SP348",
    weight: 1
  },
  {
    name: "TT. Kỹ thuật điện tử 1",
    key: "SP350",
    weight: 1
  },
  {
    name: "Cơ học lượng tử 2",
    key: "SP356",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Vật lý",
    key: "SP376",
    weight: 10
  },
  {
    name: "TT. Hóa vô cơ",
    key: "SP384",
    weight: 2
  },
  {
    name: "TT. Phương pháp giảng dạy Hóa",
    key: "SP386",
    weight: 2
  },
  {
    name: "TT. Hóa phân tích - SP.Hóa",
    key: "SP390",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - Hóa học",
    key: "SP407",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - Hóa học",
    key: "SP408",
    weight: 10
  },
  {
    name: "Kỹ thuật phòng thí nghiệm hóa học",
    key: "SP411",
    weight: 2,
  },
  {
    name: "Sinh lý động vật",
    key: "SP414",
    weight: 2
  },
  {
    name: "Sinh lý người và động vật",
    key: "SP417",
    weight: 3
  },
  {
    name: "TT. Sinh lý người và động vật",
    key: "SP418",
    weight: 1
  },
  {
    name: "Di truyền và chọn giống",
    key: "SP419",
    weight: 3
  },
  {
    name: "TT. Di truyền và chọn giống",
    key: "SP420",
    weight: 1
  },
  {
    name: "Cơ lý thuyết - Vật lý",
    key: "SP437",
    weight: 2
  },
  {
    name: "Thiên văn học",
    key: "SP438",
    weight: 2
  },
  {
    name: "Nói trước công chúng",
    key: "SP466",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp",
    key: "SP471",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp",
    key: "SP472",
    weight: 10
  },
  {
    name: "Địa lý kinh tế - xã hội thế giới 2",
    key: "SP482",
    weight: 3,
  },
  {
    name: "Tiểu luận tốt nghiệp - Địa lý",
    key: "SP492",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - Địa lý",
    key: "SP493",
    weight: 10
  },
  {
    name: "Lịch sử ngoại giao Việt Nam",
    key: "SP506",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Lịch sử",
    key: "SP511",
    weight: 10
  },
  {
    name: "Văn học dân gian Việt Nam",
    key: "SP512",
    weight: 3
  },
  {
    name: "Tác phẩm văn học và thể lọai văn học",
    key: "SP514",
    weight: 3,
  },
  {
    name: "Văn học Việt Nam trung đại 1 (thế kỷ X - nửa đầu XVIII)",
    key: "SP515",
    weight: 2,
  },
  {
    name: "Văn học châu Âu",
    key: "SP527",
    weight: 3
  },
  {
    name: "Phong cách học tiếng Việt",
    key: "SP533",
    weight: 2
  },
  {
    name: "Văn học Châu Mỹ",
    key: "SP534",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - SP. Ngữ văn",
    key: "SP540",
    weight: 10,
  },
  {
    name: "Tiểu luận tốt nghiệp - SP.Tiếng Pháp",
    key: "SP572",
    weight: 4,
  },
  {
    name: "Sinh lý thực vật - SP. Sinh học",
    key: "SP576",
    weight: 2
  },
  {
    name: "TT. Sinh lý thực vật - SP. Sinh học",
    key: "SP577",
    weight: 1,
  },
  {
    name: "Xác suất thống kê - Toán",
    key: "SP585",
    weight: 3
  },
  {
    name: "Các phương pháp Toán Lý",
    key: "SP589",
    weight: 3
  },
  {
    name: "Điền kinh 1 (*)",
    key: "TC001",
    weight: 1
  },
  {
    name: "Điền kinh 2 (*)",
    key: "TC002",
    weight: 1
  },
  {
    name: "Taekwondo 1 (*)",
    key: "TC003",
    weight: 1
  },
  {
    name: "Taekwondo 2 (*)",
    key: "TC004",
    weight: 1
  },
  {
    name: "Bóng chuyền 1 (*)",
    key: "TC005",
    weight: 1
  },
  {
    name: "Bóng chuyền 2 (*)",
    key: "TC006",
    weight: 1
  },
  {
    name: "Bóng đá 1 (*)",
    key: "TC007",
    weight: 1
  },
  {
    name: "Bóng đá 2 (*)",
    key: "TC008",
    weight: 1
  },
  {
    name: "Bóng bàn 1 (*)",
    key: "TC009",
    weight: 1
  },
  {
    name: "Bóng bàn 2 (*)",
    key: "TC010",
    weight: 1
  },
  {
    name: "Cầu lông 1 (*)",
    key: "TC011",
    weight: 1
  },
  {
    name: "Cầu lông 2 (*)",
    key: "TC012",
    weight: 1
  },
  {
    name: "Bơi lội (*)",
    key: "TC013",
    weight: 1
  },
  {
    name: "Thể dục nhịp điệu 1 (*)",
    key: "TC016",
    weight: 1
  },
  {
    name: "Thể dục nhịp điệu 2 (*)",
    key: "TC017",
    weight: 1
  },
  {
    name: "Thể dục nhịp điệu 3 (*)",
    key: "TC018",
    weight: 1
  },
  {
    name: "Taekwondo 3 (*)",
    key: "TC019",
    weight: 1
  },
  {
    name: "Bóng chuyền 3 (*)",
    key: "TC020",
    weight: 1
  },
  {
    name: "Bóng đá 3 (*)",
    key: "TC021",
    weight: 1
  },
  {
    name: "Bóng bàn 3 (*)",
    key: "TC022",
    weight: 1
  },
  {
    name: "Cầu lông 3 (*)",
    key: "TC023",
    weight: 1
  },
  {
    name: "Điền kinh 3 (*)",
    key: "TC024",
    weight: 1
  },
  {
    name: "Cờ vua 1 (*)",
    key: "TC025",
    weight: 1
  },
  {
    name: "Cờ vua 2 (*)",
    key: "TC026",
    weight: 1
  },
  {
    name: "Cờ vua 3 (*)",
    key: "TC027",
    weight: 1
  },
  {
    name: "Bóng rổ 1 (*)",
    key: "TC028",
    weight: 1
  },
  {
    name: "Bóng rổ 2 (*)",
    key: "TC029",
    weight: 1
  },
  {
    name: "Bóng rổ 3 (*)",
    key: "TC030",
    weight: 1
  },
  {
    name: "Tennis 1 (*)",
    key: "TC031",
    weight: 1
  },
  {
    name: "Tâm lý học TDTT",
    key: "TC101",
    weight: 2
  },
  {
    name: "Sinh hóa - TDTT",
    key: "TC104",
    weight: 3
  },
  {
    name: "Giải phẩu người",
    key: "TC107",
    weight: 3
  },
  {
    name: "Toán thống kê - TDTT",
    key: "TC110",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn TDTT",
    key: "TC114",
    weight: 2
  },
  {
    name: "Vệ sinh học đường",
    key: "TC116",
    weight: 2
  },
  {
    name: "Phổ tu Bóng chuyền",
    key: "TC202",
    weight: 3
  },
  {
    name: "Phổ tu Cầu lông",
    key: "TC204",
    weight: 3
  },
  {
    name: "Bóng đá nâng cao 4",
    key: "TC212",
    weight: 3
  },
  {
    name: "Bơi lội",
    key: "TC217",
    weight: 3
  },
  {
    name: "Văn hóa học TDTT",
    key: "TC223",
    weight: 2
  },
  {
    name: "Bóng rổ",
    key: "TC316",
    weight: 3
  },
  {
    name: "Quần vợt",
    key: "TC317",
    weight: 3
  },
  {
    name: "Phổ tu bóng bàn",
    key: "TC368",
    weight: 3
  },
  {
    name: "Bóng chuyền nâng cao 2",
    key: "TC387",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - TDTT",
    key: "TC400",
    weight: 10
  },
  {
    name: "Vi - Tích phân A1",
    key: "TN001",
    weight: 3
  },
  {
    name: "Vi - Tích phân A2",
    key: "TN002",
    weight: 4
  },
  {
    name: "Toán cao cấp A",
    key: "TN006",
    weight: 4
  },
  {
    name: "Xác suất thống kê",
    key: "TN010",
    weight: 3
  },
  {
    name: "Thống kê xã hội học",
    key: "TN011",
    weight: 2
  },
  {
    name: "Đại số tuyến tính và hình học",
    key: "TN012",
    weight: 4
  },
  {
    name: "Đại số tuyến tính",
    key: "TN013",
    weight: 2
  },
  {
    name: "Cơ và nhiệt đại cương",
    key: "TN014",
    weight: 2
  },
  {
    name: "TT. Cơ nhiệt đại cương",
    key: "TN015",
    weight: 1
  },
  {
    name: "Điện và quang đại cương",
    key: "TN016",
    weight: 2
  },
  {
    name: "TT. Điện và quang đại cương",
    key: "TN017",
    weight: 1
  },
  {
    name: "Hóa học đại cương",
    key: "TN019",
    weight: 3
  },
  {
    name: "TT. Hóa học đại cương",
    key: "TN020",
    weight: 1
  },
  {
    name: "Hóa vô cơ và hữu cơ đại cương",
    key: "TN021",
    weight: 2
  },
  {
    name: "TT. Hóa vô cơ và hữu cơ đại cương",
    key: "TN022",
    weight: 1,
  },
  {
    name: "Hóa phân tích đại cương",
    key: "TN023",
    weight: 2
  },
  {
    name: "TT. Hóa phân tích đại cương",
    key: "TN024",
    weight: 1
  },
  {
    name: "Sinh học đại cương A1",
    key: "TN025",
    weight: 2
  },
  {
    name: "Sinh học đại cương A2",
    key: "TN028",
    weight: 2
  },
  {
    name: "TT. Sinh học đại cương A2",
    key: "TN030",
    weight: 1
  },
  {
    name: "Tin học căn bản",
    key: "TN033",
    weight: 1
  },
  {
    name: "Tin học căn bản",
    key: "TN033H",
    weight: 1
  },
  {
    name: "TT. Tin học căn bản",
    key: "TN034",
    weight: 2
  },
  {
    name: "TT. Tin học căn bản",
    key: "TN034H",
    weight: 2
  },
  {
    name: "Microsoft Access",
    key: "TN037",
    weight: 2
  },
  {
    name: "TT. Microsoft Access",
    key: "TN038",
    weight: 2
  },
  {
    name: "Hóa học đại cương",
    key: "TN039",
    weight: 2
  },
  {
    name: "Sinh học đại cương",
    key: "TN042",
    weight: 2
  },
  {
    name: "TT. Sinh học đại cương",
    key: "TN043",
    weight: 1
  },
  {
    name: "Xác suất thống kê B",
    key: "TN044",
    weight: 2
  },
  {
    name: "Vật lý đại cương",
    key: "TN048",
    weight: 3
  },
  {
    name: "TT. Vật lý đại cương",
    key: "TN049",
    weight: 1
  },
  {
    name: "Hóa học đại cương 1",
    key: "TN051",
    weight: 2
  },
  {
    name: "TT. Hóa học đại cương 1",
    key: "TN052",
    weight: 1
  },
  {
    name: "Sinh học đại cương",
    key: "TN057",
    weight: 2
  },
  {
    name: "TT. Sinh học đại cương",
    key: "TN058",
    weight: 1
  },
  {
    name: "Toán cao cấp B",
    key: "TN059",
    weight: 3
  },
  {
    name: "Thực vật học",
    key: "TN095",
    weight: 3
  },
  {
    name: "TT. Thực vật học",
    key: "TN096",
    weight: 1
  },
  {
    name: "Động vật học",
    key: "TN097",
    weight: 3
  },
  {
    name: "TT. Động vật học",
    key: "TN098",
    weight: 1
  },
  {
    name: "Vi - Tích phân",
    key: "TN099",
    weight: 4
  },
  {
    name: "Hóa học đại cương 2",
    key: "TN102",
    weight: 3
  },
  {
    name: "TT. Hóa học đại cương 2",
    key: "TN103",
    weight: 1
  },
  {
    name: "TT. Hóa Vô cơ 2",
    key: "TN107",
    weight: 1
  },
  {
    name: "Hóa lý 1",
    key: "TN108",
    weight: 3
  },
  {
    name: "Hóa lý 2",
    key: "TN109",
    weight: 3
  },
  {
    name: "TT. Hóa lý",
    key: "TN110",
    weight: 2
  },
  {
    name: "Hóa Hữu cơ 1",
    key: "TN111",
    weight: 3
  },
  {
    name: "TT. Hóa Hữu cơ 1",
    key: "TN112",
    weight: 1
  },
  {
    name: "Hóa phân tích 2",
    key: "TN117",
    weight: 3
  },
  {
    name: "Hóa học vô cơ",
    key: "TN119",
    weight: 3
  },
  {
    name: "TT. Hóa vô cơ - CNHH",
    key: "TN120",
    weight: 2
  },
  {
    name: "TT. Hóa học hữu cơ - CNHH",
    key: "TN122",
    weight: 2
  },
  {
    name: "TT. Hóa lý - CNHH",
    key: "TN124",
    weight: 2
  },
  {
    name: "Hóa phân tích - CNHH",
    key: "TN125",
    weight: 2
  },
  {
    name: "TT. Hóa phân tích - CNHH",
    key: "TN126",
    weight: 2
  },
  {
    name: "Thống kê sinh học",
    key: "TN128",
    weight: 2
  },
  {
    name: "TT. Thống kê sinh học",
    key: "TN129",
    weight: 1
  },
  {
    name: "Sinh học rong",
    key: "TN130",
    weight: 2
  },
  {
    name: "TT. Sinh học rong",
    key: "TN131",
    weight: 1
  },
  {
    name: "TT. Đa dạng sinh học",
    key: "TN148",
    weight: 2
  },
  {
    name: "Mô động vật",
    key: "TN149",
    weight: 2
  },
  {
    name: "TT. Mô động vật",
    key: "TN150",
    weight: 1
  },
  {
    name: "Sinh học phát triển",
    key: "TN151",
    weight: 2
  },
  {
    name: "Giải tích 3",
    key: "TN157",
    weight: 3
  },
  {
    name: "Phương trình vi phân - TTK",
    key: "TN162",
    weight: 3
  },
  {
    name: "Anh văn chuyên môn - Hóa học",
    key: "TN163",
    weight: 2
  },
  {
    name: "Anh văn chuyên môn - TTK",
    key: "TN169",
    weight: 2
  },
  {
    name: "Thực tập và thực tế - TTK",
    key: "TN170",
    weight: 1
  },
  {
    name: "TT. Di truyền học",
    key: "TN172",
    weight: 1
  },
  {
    name: "TT. Hóa Vô cơ 1",
    key: "TN173",
    weight: 1
  },
  {
    name: "TT. Hóa hữu cơ 2",
    key: "TN178",
    weight: 1
  },
  {
    name: "TT. Hóa phân tích 1",
    key: "TN180",
    weight: 1
  },
  {
    name: "TT. Hóa phân tích 2",
    key: "TN182",
    weight: 1
  },
  {
    name: "Di truyền học",
    key: "TN184",
    weight: 3
  },
  {
    name: "Giải tích 1",
    key: "TN188",
    weight: 3
  },
  {
    name: "Giải tích hàm",
    key: "TN191",
    weight: 3
  },
  {
    name: "Lập trình căn bản với ngôn ngữ C",
    key: "TN195",
    weight: 3
  },
  {
    name: "Kỹ thuật xử lý ảnh",
    key: "TN201",
    weight: 2
  },
  {
    name: "Xây dựng hệ thống thông tin địa lý",
    key: "TN213",
    weight: 3,
  },
  {
    name: "Phát triển ứng dụng trên thiết bị di động",
    key: "TN216",
    weight: 3,
  },
  {
    name: "Đại số tuyến tính và hình học 2",
    key: "TN220",
    weight: 3
  },
  {
    name: "Kỹ thuật khai khoáng dữ liệu và ứng dụng",
    key: "TN228",
    weight: 3,
  },
  {
    name: "Xây dựng ứng dụng Web với .NET",
    key: "TN230",
    weight: 3
  },
  {
    name: "Hóa sinh học",
    key: "TN235",
    weight: 3
  },
  {
    name: "Anh văn chuyên môn - Sinh học",
    key: "TN237",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - Sinh học",
    key: "TN238",
    weight: 4
  },
  {
    name: "Quan hệ cấu trúc và hoạt tính sinh học",
    key: "TN240",
    weight: 2,
  },
  {
    name: "Pháp chế dược",
    key: "TN242",
    weight: 2
  },
  {
    name: "Hóa học Dược liệu",
    key: "TN243",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - Hóa học",
    key: "TN246",
    weight: 4
  },
  {
    name: "Hóa vô cơ 2",
    key: "TN247",
    weight: 3
  },
  {
    name: "Hóa hữu cơ -2",
    key: "TN249",
    weight: 3
  },
  {
    name: "Tiểu luận tốt nghiệp - TTK",
    key: "TN253",
    weight: 4
  },
  {
    name: "TT. Cơ học",
    key: "TN258",
    weight: 1
  },
  {
    name: "Nhiệt học",
    key: "TN259",
    weight: 2
  },
  {
    name: "TT. Điện từ học",
    key: "TN262",
    weight: 1
  },
  {
    name: "TT. Quang học",
    key: "TN264",
    weight: 1
  },
  {
    name: "Kỹ thuật điện",
    key: "TN265",
    weight: 2
  },
  {
    name: "TT. Kỹ thuật điện",
    key: "TN266",
    weight: 1
  },
  {
    name: "Toán cho vật lý",
    key: "TN267",
    weight: 3
  },
  {
    name: "Cơ học lượng tử ứng dụng 1",
    key: "TN268",
    weight: 3
  },
  {
    name: "Vật lý hạt nhân và nguyên tử",
    key: "TN270",
    weight: 2
  },
  {
    name: "Điện động lực học",
    key: "TN271",
    weight: 2
  },
  {
    name: "Vật lý chất rắn",
    key: "TN272",
    weight: 3
  },
  {
    name: "Vật lý thống kê",
    key: "TN273",
    weight: 3
  },
  {
    name: "Anh văn chuyên môn - VLKT",
    key: "TN274",
    weight: 2
  },
  {
    name: "Vật lý tính toán",
    key: "TN275",
    weight: 3
  },
  {
    name: "TT. Vật lý tính toán",
    key: "TN276",
    weight: 1
  },
  {
    name: "Nhập môn khoa học vật liệu",
    key: "TN280",
    weight: 3
  },
  {
    name: "TT. Công nghệ chế tạo vật liệu",
    key: "TN281",
    weight: 1
  },
  {
    name: "Quang học ứng dụng",
    key: "TN282",
    weight: 2
  },
  {
    name: "TT. Quang ứng dụng",
    key: "TN283",
    weight: 1
  },
  {
    name: "TT. Quang phổ học",
    key: "TN285",
    weight: 1
  },
  {
    name: "Cảm biến và ứng dụng",
    key: "TN286",
    weight: 3
  },
  {
    name: "TT. Cảm biến",
    key: "TN287",
    weight: 1
  },
  {
    name: "Các phương pháp phân tích không hủy mẫu",
    key: "TN292",
    weight: 2,
  },
  {
    name: "Thực tập thực tế - VLKT",
    key: "TN293",
    weight: 2
  },
  {
    name: "Hóa lượng tử đại cương",
    key: "TN301",
    weight: 2
  },
  {
    name: "TT. Các phương pháp phân tích hiện đại",
    key: "TN309",
    weight: 1,
  },
  {
    name: "TT. Hóa môi trường",
    key: "TN312",
    weight: 1
  },
  {
    name: "Tham quan thực tế",
    key: "TN319",
    weight: 1
  },
  {
    name: "TT. Phân tích kỹ thuật",
    key: "TN322",
    weight: 1
  },
  {
    name: "Các phương pháp thống kê hóa học",
    key: "TN323",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp",
    key: "TN338",
    weight: 10
  },
  {
    name: "Độc chất học môi trường",
    key: "TN339",
    weight: 2
  },
  {
    name: "Nuôi cấy mô thực vật",
    key: "TN340",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Sinh học",
    key: "TN343",
    weight: 10
  },
  {
    name: "Phương pháp tính - TTK",
    key: "TN344",
    weight: 3
  },
  {
    name: "Xử lý số liệu thống kê",
    key: "TN346",
    weight: 3
  },
  {
    name: "Toán rời rạc - TTK",
    key: "TN347",
    weight: 3
  },
  {
    name: "Thống kê Bayes",
    key: "TN355",
    weight: 3
  },
  {
    name: "Phân tích chuỗi thời gian",
    key: "TN358",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - TTK",
    key: "TN360",
    weight: 10
  },
  {
    name: "Các phương pháp phổ nghiệm hữu cơ",
    key: "TN361",
    weight: 2,
  },
  {
    name: "TT. Hóa sinh học",
    key: "TN364",
    weight: 1
  },
  {
    name: "Hóa dược",
    key: "TN367",
    weight: 3
  },
  {
    name: "Xác suất nâng cao",
    key: "TN370",
    weight: 3
  },
  {
    name: "Bào chế và sinh dược học",
    key: "TN378",
    weight: 2
  },
  {
    name: "TT. Hóa học hợp chất thiên nhiên",
    key: "TN379",
    weight: 1
  },
  {
    name: "TT. Tổng hợp Hóa dược",
    key: "TN381",
    weight: 1
  },
  {
    name: "Thử nghiệm sinh học",
    key: "TN384",
    weight: 2
  },
  {
    name: "Phản Ứng độc hại của thuốc",
    key: "TN390",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - Hóa dược",
    key: "TN393",
    weight: 10
  },
  {
    name: "Kỹ thuật tách chiết hợp chất thiên nhiên",
    key: "TN395",
    weight: 2,
  },
  {
    name: "Sinh học miễn dịch",
    key: "TN397",
    weight: 2
  },
  {
    name: "Niên luận - THƯD",
    key: "TN408",
    weight: 3
  },
  {
    name: "Xây dựng ứng dụng Web với Java",
    key: "TN412",
    weight: 3
  },
  {
    name: "Lập trình ứng dụng mạng",
    key: "TN414",
    weight: 3
  },
  {
    name: "Luận văn tốt nghiệp - THƯD",
    key: "TN418",
    weight: 10
  },
  {
    name: "Luận văn tốt nghiệp - VLKT",
    key: "TN423",
    weight: 10
  },
  {
    name: "Ứng dụng tin học cho toán",
    key: "TN426",
    weight: 3
  },
  {
    name: "An toàn và quản lý phòng thí nghiệm",
    key: "TN427",
    weight: 2,
  },
  {
    name: "TT. Thử nghiệm sinh học",
    key: "TN435",
    weight: 1
  },
  {
    name: "Phân tích kỹ thuật",
    key: "TN438",
    weight: 3
  },
  {
    name: "Xác suất và thống kê - TTK",
    key: "TN440",
    weight: 4
  },
  {
    name: "Thống kê nhiều chiều",
    key: "TN441",
    weight: 3
  },
  {
    name: "Thực vật dược",
    key: "TN451",
    weight: 2
  },
  {
    name: "Hóa học hợp chất thiên nhiên",
    key: "TN452",
    weight: 3
  },
  {
    name: "Hóa dược 2",
    key: "TN454",
    weight: 3
  },
  {
    name: "Dược lý học",
    key: "TN456",
    weight: 3
  },
  {
    name: "Hóa học các hợp chất dị vòng",
    key: "TN457",
    weight: 2
  },
  {
    name: "Kỹ thuật kiểm nghiệm dược",
    key: "TN458",
    weight: 2
  },
  {
    name: "TT. Kỹ thuật kiểm nghiệm dược",
    key: "TN459",
    weight: 1
  },
  {
    name: "Giải tích thực",
    key: "TN464",
    weight: 3
  },
  {
    name: "Phân loại và phân tích chùm",
    key: "TN467",
    weight: 3
  },
  {
    name: "Phương pháp nghiên cứu khoa học và thống kê hóa học",
    key: "TN468",
    weight: 3,
  },
  {
    name: "Thống kê ứng dụng",
    key: "TN472",
    weight: 3
  },
  {
    name: "Sinh hóa - TS",
    key: "TS100",
    weight: 3
  },
  {
    name: "Ngư nghiệp đại cương",
    key: "TS103",
    weight: 2
  },
  {
    name: "Sinh thái thủy sinh vật",
    key: "TS104",
    weight: 2
  },
  {
    name: "Sinh lý động vật thủy sản A",
    key: "TS106",
    weight: 3
  },
  {
    name: "Dinh dưỡng và thức ăn thủy sản A",
    key: "TS107",
    weight: 3
  },
  {
    name: "Di truyền và chọn giống thủy sản",
    key: "TS108",
    weight: 2
  },
  {
    name: "Phương pháp nghiên cứu sinh học cá",
    key: "TS111",
    weight: 2,
  },
  {
    name: "Dinh dưỡng và thức ăn thủy sản B",
    key: "TS118",
    weight: 2
  },
  {
    name: "Sinh học phân tử đại cương",
    key: "TS119",
    weight: 3
  },
  {
    name: "Anh văn chuyên môn - CBTS",
    key: "TS132",
    weight: 2
  },
  {
    name: "Vi sinh thủy sản đại cương A",
    key: "TS145",
    weight: 3
  },
  {
    name: "Phương pháp nghiên cứu khoa học - Thủy sản",
    key: "TS147",
    weight: 2,
  },
  {
    name: "Hình thái và phân loại tôm, cá",
    key: "TS153",
    weight: 3
  },
  {
    name: "Hóa phân tích ứng dụng - CBTS",
    key: "TS159",
    weight: 3
  },
  {
    name: "Đánh giá cảm quan sản phẩm thủy sản",
    key: "TS164",
    weight: 2,
  },
  {
    name: "Nuôi trồng thủy sản",
    key: "TS166",
    weight: 2
  },
  {
    name: "Đánh giá tác động môi trường thủy sản",
    key: "TS175",
    weight: 2,
  },
  {
    name: "GIS và viễn thám trong nghề cá",
    key: "TS184",
    weight: 2
  },
  {
    name: "Tập tính động vật thủy sản",
    key: "TS192",
    weight: 2
  },
  {
    name: "Miễn dịch học thủy sản đại cương",
    key: "TS198",
    weight: 2
  },
  {
    name: "Mô - Phôi động vật thủy sản",
    key: "TS199",
    weight: 2
  },
  {
    name: "Thực tập thực tế - NTTS",
    key: "TS200",
    weight: 3
  },
  {
    name: "Phân tích thực phẩm thủy sản",
    key: "TS213",
    weight: 3
  },
  {
    name: "Công nghệ sau thu hoạch thủy sản",
    key: "TS214",
    weight: 3
  },
  {
    name: "Phương pháp thí nghiệm chế biến thủy sản",
    key: "TS215",
    weight: 2,
  },
  {
    name: "Nước cấp, nước thải trong chế biến thủy sản",
    key: "TS218",
    weight: 2,
  },
  {
    name: "Thực tập giáo trình công nghệ chế biến thủy sản 1",
    key: "TS219",
    weight: 5,
  },
  {
    name: "Các mô hình quản lý nghề cá",
    key: "TS234",
    weight: 2
  },
  {
    name: "Kỹ thuật phân tích chất lượng nước",
    key: "TS240",
    weight: 3,
  },
  {
    name: "Kỹ thuật sản xuất giống và nuôi cá nước ngọt",
    key: "TS241",
    weight: 2,
  },
  {
    name: "Quản lý nghề cá cộng đồng",
    key: "TS243",
    weight: 2
  },
  {
    name: "Quản trị chuỗi cung ứng và chuỗi giá trị thủy sản",
    key: "TS245",
    weight: 2,
  },
  {
    name: "Sinh học nghề cá",
    key: "TS247",
    weight: 2
  },
  {
    name: "Thủy sản đại cương",
    key: "TS252",
    weight: 2
  },
  {
    name: "Phương pháp nghiên cứu khoa học và truyền thông",
    key: "TS260",
    weight: 2,
  },
  {
    name: "Thực tập quản lý kinh tế thủy sản",
    key: "TS265",
    weight: 4,
  },
  {
    name: "Thực tập giáo trình nuôi thủy sản nước ngọt",
    key: "TS269",
    weight: 6,
  },
  {
    name: "Thực tập giáo trình kỹ thuật nuôi hải sản",
    key: "TS270",
    weight: 6,
  },
  {
    name: "Phát triển kinh tế biển",
    key: "TS272",
    weight: 2
  },
  {
    name: "Bệnh nấm và ký sinh trùng Ở động vật thủy sản",
    key: "TS281",
    weight: 2,
  },
  {
    name: "Bệnh vi khuẩn và virus ở động vật thủy sản",
    key: "TS282",
    weight: 3,
  },
  {
    name: "Mô bệnh học động vật thủy sản",
    key: "TS283",
    weight: 2
  },
  {
    name: "Chuyên đề xét nghiệm giống thủy sản",
    key: "TS285",
    weight: 2,
  },
  {
    name: "Chuyên đề chẩn đoán bệnh động vật thủy sản",
    key: "TS291",
    weight: 2,
  },
  {
    name: "Thực tập giáo trình công nghệ chế biến thủy sản 1",
    key: "TS297",
    weight: 6,
  },
  {
    name: "Kỹ thuật nuôi cá nước ngọt",
    key: "TS301",
    weight: 2
  },
  {
    name: "Kỹ thuật sản xuất giống cá nước ngọt",
    key: "TS303",
    weight: 2,
  },
  {
    name: "Quản lý dịch bệnh thủy sản",
    key: "TS305",
    weight: 3
  },
  {
    name: "Thực tập giáo trình nuôi thủy sản nước ngọt",
    key: "TS306",
    weight: 5,
  },
  {
    name: "Kinh tế thủy sản",
    key: "TS308",
    weight: 2
  },
  {
    name: "Kỹ thuật nuôi thức ăn tự nhiên",
    key: "TS309",
    weight: 2
  },
  {
    name: "Kỹ thuật nuôi cá cảnh và thủy đặc sản",
    key: "TS310",
    weight: 2,
  },
  {
    name: "Kỹ thuật khai thác thủy sản B",
    key: "TS312",
    weight: 2
  },
  {
    name: "Kỹ thuật nuôi động vật thân mềm",
    key: "TS313",
    weight: 2
  },
  {
    name: "Dịch tễ học và quản lý dịch bệnh tổng hợp",
    key: "TS314",
    weight: 2,
  },
  {
    name: "Thuốc và hóa chất trong thủy sản",
    key: "TS315",
    weight: 2
  },
  {
    name: "Công trình và thiết bị thủy sản",
    key: "TS320",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - NTTS",
    key: "TS325",
    weight: 10
  },
  {
    name: "Nguyên lý và kỹ thuật chẩn đoán bệnh thủy sản",
    key: "TS326",
    weight: 3,
  },
  {
    name: "Bệnh không truyền nhiễm ở động vật thủy sản",
    key: "TS329",
    weight: 2,
  },
  {
    name: "Thực tập giáo trình Kỹ thuật thủy sản",
    key: "TS330",
    weight: 4,
  },
  {
    name: "Độc chất học thủy vực",
    key: "TS333",
    weight: 2
  },
  {
    name: "Kỹ thuật sản xuất giống và nuôi cá biển",
    key: "TS335",
    weight: 2,
  },
  {
    name: "Dịch bệnh thủy sản",
    key: "TS337",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - BHTS",
    key: "TS343",
    weight: 10
  },
  {
    name: "Quản lý tổng hợp vùng ven biển",
    key: "TS351",
    weight: 2
  },
  {
    name: "Nguyên lý bảo quản và chế biến thủy sản",
    key: "TS361",
    weight: 2,
  },
  {
    name: "Công nghệ chế biến đồ hộp thủy sản",
    key: "TS362",
    weight: 2,
  },
  {
    name: "Công nghệ chế biến sản phẩm thủy sản truyền thống",
    key: "TS364",
    weight: 2,
  },
  {
    name: "Phụ gia chế biến thủy sản",
    key: "TS365",
    weight: 2
  },
  {
    name: "Công nghệ chế biến rong biển",
    key: "TS367",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - CBTS",
    key: "TS376",
    weight: 10
  },
  {
    name: "Đa dạng và bảo tồn sinh vật biển",
    key: "TS383",
    weight: 2
  },
  {
    name: "Kỹ thuật sản xuất giống và nuôi giáp xác",
    key: "TS409",
    weight: 2,
  },
  {
    name: "Quản lý chất lượng môi trường ao nuôi thủy sản",
    key: "TS410",
    weight: 2,
  },
  {
    name: "Quy hoạch phát triển thủy sản",
    key: "TS411",
    weight: 2
  },
  {
    name: "Vi sinh vật hữu Ích",
    key: "TS412",
    weight: 2
  },
  {
    name: "Vệ sinh an toàn thực phẩm thủy sản",
    key: "TS413",
    weight: 2,
  },
  {
    name: "Kỹ thuật trồng rong biển",
    key: "TS414",
    weight: 2
  },
  {
    name: "Công nghệ chế biến dầu, bột cá và dược liệu",
    key: "TS418",
    weight: 2,
  },
  {
    name: "Chế biến thủy sản",
    key: "TS426",
    weight: 2
  },
  {
    name: "Marketing thủy sản",
    key: "TS432",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp - QLTS",
    key: "TS594",
    weight: 10
  },
  {
    name: "Công nghệ và các hệ thống thông tin",
    key: "TV104",
    weight: 3,
  },
  {
    name: "Các hệ thống tổ chức và truy cập thông tin",
    key: "TV109",
    weight: 3,
  },
  {
    name: "Anh văn chuyên ngành TT-TV 1",
    key: "TV111",
    weight: 3
  },
  {
    name: "Anh văn chuyên ngành TT-TV 2",
    key: "TV112",
    weight: 3
  },
  {
    name: "Xác định và đánh giá nguồn tài nguyên thông tin",
    key: "TV114",
    weight: 2,
  },
  {
    name: "Cấu trúc và tổ chức thông tin",
    key: "TV115",
    weight: 3
  },
  {
    name: "Quản lý nguồn tài nguyên thông tin",
    key: "TV117",
    weight: 2,
  },
  {
    name: "Định chủ đề",
    key: "TV124",
    weight: 2
  },
  {
    name: "Phân loại tài liệu ",
    key: "TV125",
    weight: 2
  },
  {
    name: "Tạo lập cơ sở dữ liệu TT - TV",
    key: "TV131",
    weight: 3
  },
  {
    name: "Chuyên đề thông tin - thư viện",
    key: "TV133",
    weight: 2
  },
  {
    name: "Môi giới thông tin",
    key: "TV134",
    weight: 2
  },
  {
    name: "Dịch vụ thư viện dành cho trẻ em",
    key: "TV136",
    weight: 2
  },
  {
    name: "Từ vựng 1-PV",
    key: "TV138",
    weight: 2
  },
  {
    name: "Nghe nói 1 - PV",
    key: "TV201",
    weight: 3
  },
  {
    name: "Nghe nói 2 - PV",
    key: "TV202",
    weight: 3
  },
  {
    name: "Nghe nói 3 - PV",
    key: "TV203",
    weight: 3
  },
  {
    name: "Nghe nói 4 - PV",
    key: "TV204",
    weight: 3
  },
  {
    name: "Đọc hiểu 1 - PV",
    key: "TV205",
    weight: 2
  },
  {
    name: "Đọc hiểu 3 - PV",
    key: "TV207",
    weight: 2
  },
  {
    name: "Viết 1 - PV",
    key: "TV209",
    weight: 2
  },
  {
    name: "Viết 3 - PV",
    key: "TV211",
    weight: 2
  },
  {
    name: "Ngữ pháp 2 - PV",
    key: "TV214",
    weight: 2
  },
  {
    name: "Ngữ pháp 3 - PV",
    key: "TV215",
    weight: 2
  },
  {
    name: "Ngữ pháp 4 - PV",
    key: "TV216",
    weight: 2
  },
  {
    name: "Ngữ âm thực hành - PV",
    key: "TV217",
    weight: 2
  },
  {
    name: "Phương pháp Nghiên cứu khoa học - PV",
    key: "TV220",
    weight: 2,
  },
  {
    name: "Biên dịch 2 - PV",
    key: "TV223",
    weight: 2
  },
  {
    name: "Phiên dịch 2 - PV",
    key: "TV225",
    weight: 2
  },
  {
    name: "Diễn đạt trước công chúng - PV",
    key: "TV227",
    weight: 2
  },
  {
    name: "Giao tiếp đa văn hóa - PV",
    key: "TV230",
    weight: 2
  },
  {
    name: "Các loại hình văn bản",
    key: "TV231",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - PV",
    key: "TV233",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - PV",
    key: "TV234",
    weight: 10
  },
  {
    name: "Thực tế TT-TV",
    key: "TV235",
    weight: 1
  },
  {
    name: "Sử dụng phương tiện truyền thông-PV",
    key: "TV237",
    weight: 2,
  },
  {
    name: "Hướng nghiệp chuyên môn - PV",
    key: "TV240",
    weight: 2
  },
  {
    name: "Kỹ năng DELF B2",
    key: "TV241",
    weight: 3
  },
  {
    name: "Cơ sở ngữ dụng và ứng dụng",
    key: "TV244",
    weight: 2
  },
  {
    name: "Kỹ năng nghe-nói nâng cao-PV",
    key: "TV252",
    weight: 2
  },
  {
    name: "Ngữ pháp nâng cao - PV",
    key: "TV253",
    weight: 2
  },
  {
    name: "Kỹ thuật trình bày tài liệu khoa học",
    key: "TV255",
    weight: 2,
  },
  {
    name: "Quản lý nội dung Web",
    key: "TV256",
    weight: 2
  },
  {
    name: "Thực tế ngoài trường - PV",
    key: "TV258",
    weight: 3
  },
  {
    name: "Kỹ năng DELF B1",
    key: "TV259",
    weight: 3
  },
  {
    name: "Chuyên đề văn học Pháp",
    key: "TV260",
    weight: 2
  },
  {
    name: "Tự động hóa hoạt động thư viện",
    key: "TV262",
    weight: 3
  },
  {
    name: "Thiết kế Web",
    key: "TV301",
    weight: 3
  },
  {
    name: "Quản lý nguồn tài liệu số",
    key: "TV302",
    weight: 3
  },
  {
    name: "Đào tạo kỹ năng thông tin",
    key: "TV314",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - TT&TV",
    key: "TV322",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - TT&TV",
    key: "TV323",
    weight: 10
  },
  {
    name: "Chính sách thông tin",
    key: "TV327",
    weight: 2
  },
  {
    name: "Mô tả tài liệu",
    key: "TV329",
    weight: 2
  },
  {
    name: "Công tác phục vụ bạn đọc",
    key: "TV331",
    weight: 2
  },
  {
    name: "Xuất bản điện tử",
    key: "TV333",
    weight: 2
  },
  {
    name: "Internet và các công nghệ trên Internet",
    key: "TV334",
    weight: 2,
  },
  {
    name: "Cơ sở văn hóa Việt Nam",
    key: "XH011",
    weight: 2
  },
  {
    name: "Tiếng Việt thực hành",
    key: "XH012",
    weight: 2
  },
  {
    name: "Văn bản và lưu trữ học đại cương",
    key: "XH014",
    weight: 2
  },
  {
    name: "Mỹ học đại cương",
    key: "XH016",
    weight: 2
  },
  {
    name: "Anh văn căn bản 1 (*)",
    key: "XH023",
    weight: 4
  },
  {
    name: "Anh văn căn bản 2 (*)",
    key: "XH024",
    weight: 3
  },
  {
    name: "Anh văn căn bản 3 (*)",
    key: "XH025",
    weight: 3
  },
  {
    name: "Xã hội học đại cương",
    key: "XH028",
    weight: 2
  },
  {
    name: "Anh văn tăng cường 1 (*)",
    key: "XH031",
    weight: 4
  },
  {
    name: "Các thể thơ Việt Nam",
    key: "XH114",
    weight: 2
  },
  {
    name: "Ngôn ngữ báo chí",
    key: "XH117",
    weight: 2
  },
  {
    name: "Dân số và phát triển",
    key: "XH137",
    weight: 2
  },
  {
    name: "Thủ tục hải quan và cước phí",
    key: "XH150",
    weight: 2
  },
  {
    name: "Ứng dụng công nghệ thông tin trong du lịch",
    key: "XH151",
    weight: 2,
  },
  {
    name: "Phương pháp nghiên cứu khoa học - Anh văn",
    key: "XH175",
    weight: 2,
  },
  {
    name: "Tiếng Anh chuyên ngành-Du lịch 1",
    key: "XH187",
    weight: 4
  },
  {
    name: "Tiếng Anh chuyên ngành-Du lịch 2",
    key: "XH188",
    weight: 4
  },
  {
    name: "Tiếng Anh chuyên ngành-Du lịch 3",
    key: "XH189",
    weight: 4
  },
  {
    name: "Y tế du lịch",
    key: "XH190",
    weight: 2
  },
  {
    name: "Kỹ năng giao tiếp xã hội",
    key: "XH193",
    weight: 2
  },
  {
    name: "Hán văn cơ sở",
    key: "XH194",
    weight: 3
  },
  {
    name: "Chữ Nôm",
    key: "XH196",
    weight: 3
  },
  {
    name: "Thực tế ngoài trường - Văn học",
    key: "XH218",
    weight: 2
  },
  {
    name: "Văn học Việt Nam đại cương",
    key: "XH313",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - Văn học",
    key: "XH346",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - Văn học",
    key: "XH347",
    weight: 10
  },
  {
    name: "Lịch sử Việt Nam hiện đại 1",
    key: "XH361",
    weight: 2
  },
  {
    name: "Dẫn luận ngôn ngữ - Anh văn",
    key: "XH383",
    weight: 3
  },
  {
    name: "Du lịch Văn hóa",
    key: "XH409",
    weight: 2
  },
  {
    name: "Du lịch sinh thái",
    key: "XH415",
    weight: 2
  },
  {
    name: "Hệ thống lãnh thổ du lịch",
    key: "XH416",
    weight: 2
  },
  {
    name: "Lữ hành nội địa và quốc tế",
    key: "XH420",
    weight: 2
  },
  {
    name: "Tuyến điểm du lịch Việt Nam",
    key: "XH423",
    weight: 2
  },
  {
    name: "Phát triển du lịch bền vững",
    key: "XH426",
    weight: 2
  },
  {
    name: "Tâm lý du khách và nghệ thuật giao tiếp",
    key: "XH429",
    weight: 2,
  },
  {
    name: "Tiểu luận tốt nghiệp - Du lịch",
    key: "XH439",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp - Du lịch",
    key: "XH440",
    weight: 10
  },
  {
    name: "Ngữ dụng học - Anh văn",
    key: "XH454",
    weight: 2
  },
  {
    name: "Âm vị học",
    key: "XH455",
    weight: 2
  },
  {
    name: "Lý thuyết dịch",
    key: "XH465",
    weight: 2
  },
  {
    name: "Dẫn luận văn chương",
    key: "XH478",
    weight: 3
  },
  {
    name: "Nói trước công chúng - Anh văn",
    key: "XH481",
    weight: 3
  },
  {
    name: "Tiểu luận tốt nghiệp",
    key: "XH498",
    weight: 4
  },
  {
    name: "Luận văn tốt nghiệp",
    key: "XH499",
    weight: 10
  },
  {
    name: "Biên dịch thư tín thương mại",
    key: "XH508",
    weight: 2
  },
  {
    name: "Tiểu luận tốt nghiệp - P.Dịch",
    key: "XH511",
    weight: 4
  },
  {
    name: "Từ pháp học và cú pháp học",
    key: "XH535",
    weight: 3
  },
  {
    name: "Ngữ nghĩa học và ngữ dụng học",
    key: "XH536",
    weight: 3
  },
  {
    name: "Ngôn ngữ học đối chiếu",
    key: "XH537",
    weight: 2
  },
  {
    name: "Phê bình văn học đại cương",
    key: "XH540",
    weight: 3
  },
  {
    name: "Đông Nam Á học",
    key: "XH547",
    weight: 2
  },
  {
    name: "Dịch thuật đại cương",
    key: "XH551",
    weight: 2
  },
  {
    name: "Tài nguyên và môi trường du lịch Việt Nam",
    key: "XH556",
    weight: 2,
  },
  {
    name: "Thị trường du lịch",
    key: "XH557",
    weight: 2
  },
  {
    name: "Kỹ năng thuyết trình du lịch",
    key: "XH558",
    weight: 2
  },
  {
    name: "Nghiệp vụ hướng dẫn du lịch",
    key: "XH559",
    weight: 3
  },
  {
    name: "Phương pháp nghiên cứu-Du lịch",
    key: "XH560",
    weight: 2
  },
  {
    name: "Quy hoạch du lịch",
    key: "XH562",
    weight: 2
  },
  {
    name: "Thực tập nghiệp vụ du lịch",
    key: "XH563",
    weight: 3
  },
  {
    name: "Từ Hán Việt",
    key: "XH580",
    weight: 2
  },
  {
    name: "Văn hoá, dân cư, môi trường Đồng bằng sông Cửu Long",
    key: "XH584",
    weight: 2,
  },
  {
    name: "Địa lý du lịch thế giới",
    key: "XN103",
    weight: 3
  },
  {
    name: "Kỹ thuật nhiếp ảnh và quay Video",
    key: "XN110",
    weight: 2
  },
  {
    name: "Công tác xã hội",
    key: "XN113",
    weight: 3
  },
  {
    name: "Anh văn chuyên ngành - XHH",
    key: "XN114",
    weight: 3
  },
  {
    name: "Nhân học đại cương",
    key: "XN115",
    weight: 2
  },
  {
    name: "Các vấn đề xã hội đương đại",
    key: "XN118",
    weight: 3
  },
  {
    name: "Sinh kế, đánh giá nông thôn có sự tham gia (PRA)",
    key: "XN119",
    weight: 3,
  },
  {
    name: "Báo chí truyền thông đại cương",
    key: "XN201",
    weight: 2
  },
  {
    name: "Biên tập các loại hình báo chí truyền thông",
    key: "XN202",
    weight: 2,
  },
  {
    name: "Kiến trúc và nghệ thuật truyền thống Việt Nam",
    key: "XN206",
    weight: 2,
  },
  {
    name: "Kỹ năng hoạt náo và tổ chức teambuilding",
    key: "XN207",
    weight: 2,
  },
  {
    name: "Nghệ thuật học",
    key: "XN209",
    weight: 2
  },
  {
    name: "Nghiệp vụ chào bán tour và chăm sóc khách hàng",
    key: "XN212",
    weight: 2,
  },
  {
    name: "Nghiệp vụ nhà báo",
    key: "XN213",
    weight: 2
  },
  {
    name: "Ngữ âm - Từ vựng - Ngữ nghĩa tiếng Việt",
    key: "XN214",
    weight: 3,
  },
  {
    name: "Phát triển bền vững",
    key: "XN218",
    weight: 3
  },
  {
    name: "Phê bình văn học Việt Nam hiện đại",
    key: "XN219",
    weight: 2,
  },
  {
    name: "Phương pháp nghiên cứu khoa học xã hội",
    key: "XN220",
    weight: 3,
  },
  {
    name: "Tạo lập văn bản và giao tiếp hành chính",
    key: "XN223",
    weight: 2,
  },
  {
    name: "Thực hành công tác xã hội",
    key: "XN225",
    weight: 3
  },
  {
    name: "Văn hoá Nam bộ",
    key: "XN227",
    weight: 2
  },
  {
    name: "Văn học Ấn Độ và Đông Bắc Á",
    key: "XN228",
    weight: 2
  },
  {
    name: "Văn học Mỹ và các nước Mỹ Latinh",
    key: "XN232",
    weight: 2
  },
  {
    name: "Văn học Nga",
    key: "XN233",
    weight: 4
  },
  {
    name: "Văn học Trung Quốc",
    key: "XN235",
    weight: 4
  },
  {
    name: "Văn học Việt Nam 1900-1945",
    key: "XN236",
    weight: 4
  },
  {
    name: "Văn học Việt Nam từ 1975 đến nay",
    key: "XN238",
    weight: 2
  },
  {
    name: "Văn học Việt Nam từ thế kỷ X đến giữa thế kỷ XVIII",
    key: "XN240",
    weight: 3,
  },
  {
    name: "Văn học Anh - Pháp",
    key: "XN242",
    weight: 4
  },
  {
    name: "Kịch bản truyền thông",
    key: "XN243",
    weight: 2
  },
  {
    name: "Lý thuyết xã hội học hiện đại",
    key: "XN244",
    weight: 3
  },
  {
    name: "Thực tế ngoài trường-Du lịch 2",
    key: "XN246",
    weight: 2
  },
  {
    name: "Du lịch cộng đồng và Homestay",
    key: "XN301",
    weight: 2
  },
  {
    name: "Tổ chức sự kiện và Du lịch MICE",
    key: "XN302",
    weight: 2
  },
  {
    name: "Du lịch biển đảo",
    key: "XN303",
    weight: 2
  },
  {
    name: "Du lịch tôn giáo-tâm linh",
    key: "XN304",
    weight: 2
  },
  {
    name: "Du lịch làng nghề",
    key: "XN305",
    weight: 2
  },
  {
    name: "Thực tế ngoài trường-Du lịch 1",
    key: "XN306",
    weight: 2
  },
  {
    name: "Nghiệp vụ nhà hàng, khách sạn-Du lịch",
    key: "XN307",
    weight: 3,
  },
  {
    name: "Luật du lịch",
    key: "XN310",
    weight: 2
  },
  {
    name: "Biên dịch 2: Biên dịch căn bản 2",
    key: "XN313",
    weight: 3
  },
  {
    name: "Phiên dịch 2: Kỹ năng dịch đuổi căn bản 2",
    key: "XN315",
    weight: 3,
  },
  {
    name: "Biên dịch 4: Biên dịch nâng cao 2",
    key: "XN317",
    weight: 3,
  },
  {
    name: "Biên dịch Y khoa",
    key: "XN318",
    weight: 3
  },
  {
    name: "Biên dịch Môi trường",
    key: "XN319",
    weight: 3
  },
  {
    name: "Biên dịch Kỹ thuật",
    key: "XN320",
    weight: 3
  },
  {
    name: "Biên dịch Báo chí",
    key: "XN321",
    weight: 3
  },
  {
    name: "Văn hóa các nước nói tiếng Anh",
    key: "XN327",
    weight: 3
  },
  {
    name: "Chuyên đề Ngữ pháp nâng cao",
    key: "XN328",
    weight: 2
  },
  {
    name: "Chuyên đề Ngữ âm nâng cao",
    key: "XN329",
    weight: 2
  },
  {
    name: "Văn học Anh-Mỹ",
    key: "XN334",
    weight: 3
  },
  {
    name: "Thực tế xã hội học",
    key: "XN341",
    weight: 2
  },
  {
    name: "Biên dịch Thư tín văn phòng",
    key: "XN342",
    weight: 3
  },
  {
    name: "Xã hội học đô thị",
    key: "XN348",
    weight: 2
  },
  {
    name: "Xã hội học kinh tế",
    key: "XN349",
    weight: 2
  },
  {
    name: "Xã hội học gia đình",
    key: "XN353",
    weight: 3
  },
  {
    name: "Xã hội học về giới",
    key: "XN354",
    weight: 3
  },
  {
    name: "Xã hội học truyền thông đại chúng",
    key: "XN355",
    weight: 3,
  },
  {
    name: "Xã hội học chính trị",
    key: "XN363",
    weight: 2
  },
  {
    name: "Xã hội học tôn giáo",
    key: "XN365",
    weight: 2
  },
  {
    name: "Xã hội học y tế",
    key: "XN366",
    weight: 2
  },
  {
    name: "Xã hội học quản lý",
    key: "XN367",
    weight: 2
  },
  {
    name: "Luận văn tốt nghiệp",
    key: "XN381",
    weight: 10
  },
  {
    name: "Tiểu luận tốt nghiệp",
    key: "XN382",
    weight: 4
  },
];

module.exports = courses;