const yaz = ["çilek", "muz", "karpuz"];
const kis = ["armut", "portakal", "elma"];

// Yaz meyvelerini önce, kış meyvelerini sonra olacak şekilde birleştir
const meyveler = [...yaz, ...kis];

console.log("Birleştirilmiş meyveler:", meyveler);

// Okul objesi tanımla
const okul = {
    name: "İTÜ",
    location: "Maslak",
    phone: "(0212) 285 30 30",
    established: 1773
};

console.log("Okul bilgileri:", okul);

// Car objesi tanımla
const car = {
    renk: "Beyaz",
    "model yılı": 2011,
    vites: "Otomatik",
    "yakıt türü": "Dizel"
};

// Köşeli parantez yöntemi kullanarak cümleleri oluştur ve yazdır
console.log(`Arabamız, ${car["model yılı"]} model ${car.renk} renktir.`);
console.log(`${car.vites} vitesli olup, ${car["yakıt türü"]} yakıt ile çalışmaktadır.`);

// Obje özelliğini değiştiren fonksiyon
function changeProperty(object, key, value) {
    object[key] = value;
    return object;
}

// Fonksiyonu test et
const testObj = { name: "Ahmet", age: 25, city: "İstanbul" };
console.log("Orijinal obje:", testObj);

const updatedObj = changeProperty(testObj, "age", 30);
console.log("Güncellenmiş obje:", updatedObj);

// Person objesi tanımla
const person = {
    name: "Ahmet",
    age: 20,
    city: "İstanbul"
};

// Dot operatörü kullanarak yeni özellikler ekle
person.oyVerebilir = person.age >= 18;
person.surname = "Koçak";

console.log("Person objesi:", person);

// Cohort array'ini tanımla ve kopyala
const cohort0824 = ["Ali", "Ceren", "Derya", "Melisa"];
const ogrenciler = [...cohort0824, "Erhan"];

console.log("Orijinal cohort:", cohort0824);
console.log("Öğrenciler listesi:", ogrenciler);

// Array birleştirme işlemi
const array = [1, 2, 3, 4, 5];
const merged = [...array, ...array, array.length];
console.log(merged);
let result = merged;

console.log("Result değişkeni:", result);

// Kullanıcı bilgileri
const kisiselBilgiler = {
    name: "Emre",
    surname: "Merdan",
    birthDate: "01 Ocak 1970"
};

const kurumsalBilgiler = {
    company: "Text A.Ş.",
    department: "IT"
};

const ozelBilgiler = {
    workPhone: "212 100 01 01",
    mobilePhone: "532 500 10 10"
};

// Tüm bilgileri user objesinde birleştir
const user = {
    ...kisiselBilgiler,
    ...kurumsalBilgiler,
    ...ozelBilgiler,
    address: "Emanet sk. No:5 Kadiköy İstanbul",
    name: "Halil",
    age: 36,
    learn: function(konu) {
        console.log(`Bugün ${konu} konusunu öğrendim`);
    }
};

console.log("Birleştirilmiş user objesi:", user);

// Brands array'ine Mercedes'i başa ekle
const brands = ["Ford", "BMW", "Audi", "Toyota"];
const brandsFinal = ["Mercedes", ...brands];

console.log("Orijinal brands:", brands);
console.log("BrandsFinal:", brandsFinal);

// Human objesi ve learn metodu
const human = {
    name: "Marry",
    age: 45,
    location: "San Francisco",
    langs: ["English", "German"],
    learn: function(language) {
        this.langs.push(language);
    }
};

console.log("Başlangıç dilleri:", human.langs);
human.learn("Spanish");
console.log("Yeni dil öğrendikten sonra:", human.langs);

// Araba objesi ve metodları
const araba = {
    model: 'VW Passat',
    "üretim yılı": 2011,
    kilometre: 153000,
    fiyat: 800000,
    start: function() {
        console.log("Araba çalıştırıldı");
    },
    changePrice: function(percentage) {
        this.fiyat = this.fiyat * (1 + percentage / 100);
        return `Araba'nın güncel fiyatı ${this.fiyat} TL'dir.`;
    }
};

// Start metodunu çağır
araba.start();

// Arabanın fiyatını yüzde 40 zamlı hale getir ve metni yazdır
console.log(araba.changePrice(40));

// Araba objesi oluşturan fonksiyon
function getCarObject(id, model, yakit, vites, yas) {
    const currentYear = 2024;
    const uretimYili = currentYear - yas;
    
    const car = {
        id: id,
        model: model,
        yakit: yakit,
        vites: vites,
        uretimYili: uretimYili
    };
    
    return car;
}

// Fonksiyonu test et
const testCar = getCarObject(1, "BMW X5", "Benzin", "Otomatik", 3);
console.log("Oluşturulan araba objesi:", testCar);

// User objesi ve değişiklikler
const userPerson = {
    "Tam Adı": "Serdar Toprak",
    "Doğum Tarihi": "1 Temmuz 1978",
    "Yaş": 44,
    "Doğum Yeri": "Üsküp",
};

// Doğum tarihini güncelle
userPerson["Doğum Tarihi"] = "30 Haziran 1978";

// Yaş değerini objeden çıkar
delete userPerson["Yaş"];

// Tc No ekle
userPerson["Tc No"] = "49900121212";

console.log("Güncellenmiş user objesi:", userPerson);

// Obje özelliğini artıran fonksiyon
function incrementProperty(object, key, value) {
    if (object.hasOwnProperty(key)) {
        // Eğer key varsa, mevcut değere value'yu ekle
        object[key] += value;
    } else {
        // Eğer key yoksa, value'yu direkt ata
        object[key] = value;
    }
    return object;
}

// Fonksiyonu test et
const testObj1 = { score: 100, level: 5 };
console.log("Orijinal obje:", testObj1);

const updatedObj1 = incrementProperty(testObj1, "score", 50);
console.log("Score artırıldıktan sonra:", updatedObj1);

const updatedObj2 = incrementProperty(testObj1, "health", 100);
console.log("Yeni özellik eklendikten sonra:", updatedObj2);

// Company objesi ve metin yazdırma
const company = {
    ad: "Workintech",
    kurulus: 2022,
    adres: {
        mahalle: "Caddebostan",
        cadde: "Bağdat",
        ilce: "Kadıköy",
        apartman: "Bağdat Palas",
        no: 302
    }
};

// Dot operatörü kullanarak metni yazdır
console.log(company.ad + " şirketi, " + company.adres.ilce + " ilçesinde " + company.adres.mahalle + " mahallesindedir. " + company.kurulus + " yılında kurulmuştur.");

// Şampiyonlar Ligi takımları
const torba1 = ["Manchester City", "Bayern Münih", "Real Madrid", "PSG", "Liverpool", "Inter", "Borussia Dortmund", "Leipzig", "Barcelona"];
const torba2 = ["Bayer Leverkusen", "Atletico Madrid", "Atalanta", "Juventus", "Benfica", "Arsenal", "Club Brugge", "Shakhtar Donetsk", "Milan"];
const torba3 = ["Feyenoord", "Sporting Lizbon", "PSV", "Dinamo Zagreb", "Salzburg", "Lille", "Kızılyıldız", "Young Boys", "Celtic"];

// Tüm takımları spread operatörü ile birleştir ve Stuttgart'ı ekle
let katilimciTakimlar = [...torba1, ...torba2, ...torba3, "Stuttgart"];

console.log("Katılımcı takımlar:", katilimciTakimlar);
console.log("Toplam takım sayısı:", katilimciTakimlar.length);

// Learn metodunu test et
user.learn("JavaScript");

// User objesi ve learn metodu
const userHalil = {
    name: "Halil",
    age: 36,
    learn: function(konu) {
        console.log(`Bugün ${konu} konusunu öğrendim`);
    }
};

// Learn metodunu test et
userHalil.learn("JavaScript");

// Team objesi ve transfer metodu
const team = {
    name: "Beşiktaş",
    "kuruluş yılı": 1903,
    transfer: function(futbolcu) {
        return `${futbolcu} takımımıza transfer oldu. Kendisine başarılar diliyoruz.`;
    }
};

// Transfer metodunu Rafa Silva ile çağır ve metni yazdır
console.log(team.transfer("Rafa Silva"));

// Calculator objesi ve matematik işlemleri
const calculator = {
    toplama: function(a, b) {
        return a + b;
    },
    carpma: function(a, b) {
        return a * b;
    },
    bolme: function(a, b) {
        return a / b;
    },
    cikarma: function(a, b) {
        return a - b;
    }
};

// Calculator metodlarını test et
console.log("Toplama:", calculator.toplama(10, 5));
console.log("Çarpma:", calculator.carpma(10, 5));
console.log("Bölme:", calculator.bolme(10, 5));
console.log("Çıkarma:", calculator.cikarma(10, 5));

// Araba objesinden yeni obje yaratan fonksiyon
function newCar(carObj) {
    // Gelen arabanın kopyasını yarat
    const newCarObj = { ...carObj };
    
    // OTV özelliği ekle
    if (carObj.fiyat < 1450000) {
        newCarObj.otv = 10;
    } else {
        newCarObj.otv = 40;
    }
    
    // MTV özelliği ekle
    if (carObj.yas >= 1 && carObj.yas <= 10) {
        newCarObj.mtv = 1773;
    } else {
        newCarObj.mtv = 520;
    }
    
    // isDomestic özelliği ekle
    if (carObj.model.includes('TOGG')) {
        newCarObj.isDomestic = true;
    } else {
        newCarObj.isDomestic = false;
    }
    
    return newCarObj;
}

// Fonksiyonu test et
const newTestCar = newCar({
    id: 121,
    model: 'TOGG T10X',
    yakit: 'Elektrikli',
    vites: 'Otomatik',
    yas: 2,
    fiyat: 1800000
});

console.log("Yeni araba objesi:", newTestCar);

// Sayıların tekrar sıklığını bulan fonksiyon
function frequency(sayilar) {
    // Sayıların tekrar sıklıklarını saklamak için boş obje oluştur
    const depo = {};
    
    // Array için döngü yap
    for (let i = 0; i < sayilar.length; i++) {
        const sayi = sayilar[i];
        
        // Sayı obje'de var mı kontrol et
        if (depo.hasOwnProperty(sayi)) {
            // Varsa değerini 1 artır
            depo[sayi] += 1;
        } else {
            // Yoksa değeri 1 olacak şekilde ekle
            depo[sayi] = 1;
        }
    }
    
    return depo;
}

// Fonksiyonu test et
const sonuc = frequency([1, 1, 1, 1, 1, 2, 2, 2, 2, 13]);
console.log("Sayıların tekrar sıklığı:", sonuc);

// Volvo Araba Simülatörü
function carSimulator(marka, model, kilometre, fiyat) {
    // Araba objesi oluştur
    const araba = {
        marka: marka,
        model: model,
        kilometre: kilometre,
        fiyat: fiyat,
        depo: 50, // Yarı dolu depo
        
        // Fiyat gösteren metod
        getPrice: function() {
            return `Bu ${this.marka} ${this.model} modelinin fiyatı ${this.fiyat} TL'dir.`;
        },
        
        // Yakıt alma metodu
        refuel: function(eklenecekYakit) {
            const yeniDepo = this.depo + eklenecekYakit;
            
            if (yeniDepo > 100) {
                this.depo = 100;
                return `Depo tamamen dolduruldu. Güncel yakıt oranı: %${this.depo}`;
            } else {
                this.depo = yeniDepo;
                return `Yakıt eklendi. Güncel yakıt oranı: %${this.depo}`;
            }
        },
        
        // Sürme metodu
        drive: function(gidilecekKm) {
            // Toplam kilometreyi güncelle
            this.kilometre += gidilecekKm;
            
            // Her 100 km için yakıt ve değer hesaplama
            const yakitHarcanan = Math.floor(gidilecekKm / 100) * 5;
            const degerDususu = Math.floor(gidilecekKm / 100) * 50;
            
            // Yakıtı azalt
            this.depo -= yakitHarcanan;
            if (this.depo < 0) {
                this.depo = 0;
            }
            
            // Fiyatı azalt
            this.fiyat -= degerDususu;
            if (this.fiyat < 0) {
                this.fiyat = 0;
            }
            
            return `Araba ${gidilecekKm} km yol aldı. Güncel kilometre: ${this.kilometre} km. Kalan yakıt: %${this.depo}`;
        }
    };
    
    return araba;
}

// Simülatörü test et
const volvoAraba = carSimulator("Volvo", "XC60", 15000, 2500000);

console.log("=== VOLVO ARAÇ SİMÜLATÖRÜ ===");
console.log(volvoAraba.getPrice());
console.log(volvoAraba.refuel(30));
console.log(volvoAraba.drive(250));
console.log(volvoAraba.getPrice());

// Karşılama mesajı fonksiyonu
function selamla(isim) {
    return `Merhaba ${isim}!`;
}

// Fonksiyonu test et
console.log(selamla("Ali"));
console.log(selamla("Ayşe"));
console.log(selamla("Mehmet"));

// Ehliyet alma kontrolü fonksiyonu
function ehliyetAlabilirMi(yas) {
  return `Ehliyet: ${yas >= 18 ? "alabilir" : "alamaz"}`; 
}

// Fonksiyonu test et
console.log(ehliyetAlabilirMi(16));
console.log(ehliyetAlabilirMi(18));
console.log(ehliyetAlabilirMi(25));

// KDV dahil fiyat hesaplama fonksiyonu (tamamlanmış)
function kdvDahilFiyatHesapla(fiyat, kdv = 20) {
    const kdvTutari = fiyat * (kdv / 100);
    const kdvDahilFiyat = fiyat + kdvTutari;
    return kdvDahilFiyat;
}

// Fonksiyonu test et
console.log("100 TL ürün, %20 KDV:", kdvDahilFiyatHesapla(100));
console.log("100 TL ürün, %18 KDV:", kdvDahilFiyatHesapla(100, 18));
console.log("100 TL ürün, %8 KDV:", kdvDahilFiyatHesapla(100, 8));
