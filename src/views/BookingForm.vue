<template>
    <div class="container mt-4 d-flex">
        <div class="booking-form flex-grow-1">
            <h1>Booking Lapangan: {{ fieldName }}</h1>
            <form @submit.prevent="submitBooking">
                <div class="mb-3">
                    <label for="name" class="form-label">Nama Pelamar</label>
                    <input v-model="formData.name" type="text" class="form-control" id="name" required
                        placeholder="Masukkan nama pelamar" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input v-model="formData.email" type="email" class="form-control" id="email" required
                        placeholder="Masukkan email pelamar" />
                </div>
                <div class="mb-3">
                    <label for="team" class="form-label">Team</label>
                    <input type="text" class="form-control" id="team" required readonly value="Staff IT" />
                </div>
                <div class="mb-3">
                    <label for="field" class="form-label">Lapangan</label>
                    <input v-model="formData.field" type="text" class="form-control" id="field" required readonly />
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label">Tanggal Booking</label>
                    <input v-model="formData.date" type="date" class="form-control" id="date" required :min="minDate" />
                </div>
                <div class="mb-3">
                    <label for="time" class="form-label">Jam</label>
                    <select v-model="formData.time" class="form-select" id="time" required>
                        <option value="" disabled selected>Pilih Jam</option>
                        <option v-for="slot in timeSlots" :key="slot.value" :value="slot.value">{{ slot.label }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="coupon" class="form-label">Kode Kupon</label>
                    <input v-model="formData.coupon" type="text" class="form-control" id="coupon"
                        placeholder="Masukkan kode kupon" />
                    <button type="button" class="btn btn-info mt-2" @click="redeemCoupon">Redeem</button>
                </div>
                <div class="mb-3">
                    <label for="totalPrice" class="form-label">Total Harga</label>
                    <input v-model="totalPrice" type="text" class="form-control" id="totalPrice" readonly
                        placeholder="Total Harga" />
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>

        <div class="field-info ms-4">
            <img :src="fieldImage" alt="Field Image" class="img-fluid" />
            <p class="mt-2">{{ fieldDescription }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const fieldName = ref('')

const formData = ref({
    name: '',
    email: '',
    team: 'Staff IT',
    field: '',
    date: '',
    time: '',
    coupon: '',
})

const minDate = ref('')
const totalPrice = ref('')

const timeSlots = ref([
    { value: '06:00-08:00', label: '06:00 - 08:00' },
    { value: '08:00-10:00', label: '08:00 - 10:00' },
    { value: '10:00-12:00', label: '10:00 - 12:00' },
    { value: '12:00-14:00', label: '12:00 - 14:00' },
    { value: '14:00-16:00', label: '14:00 - 16:00' },
    { value: '16:00-18:00', label: '16:00 - 18:00' },
    { value: '18:00-20:00', label: '18:00 - 20:00' },
]);

const pricePerHour = 2000000;

onMounted(() => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    minDate.value = `${yyyy}-${mm}-${dd}`
    fieldName.value = route.query.fieldName || 'Unknown Field'
    formData.value.field = fieldName.value;
    updateFieldInfo(fieldName.value);
})

// Mapping images and descriptions
const fieldDetails = {
    'Lapangan 1': {
        image: '/src/components/icons/fieldimage1.jpg',
        description: `Lapangan 1 exclusively built with the state of the art facilities to create an 
        experience of playing as a true professional football player. 
        Using the latest technology of 60 mm thick fiber grass that is perfectly safe for players 
        from injury caused by sliding of falling onto grass. Using heavy strong goal post with 
        FIFA standard net. The field dimension follows FIFA’s standard as part of our commitment 
        on sharing FIFA standard facilities for everyone to experience. Bring your love ones to watch 
        your football game from our audience stand that is family friendly protected from unexpected ball 
        strikes with our steel fence and roof from rain and sun ray heat. Each facility is maintained 
        regularly by our professional crew. Surrounded by advertising boards around the field to add a 
        football experience in each photographs your team receives from your photographer. 
        Experience playing in the evening to see a magnificent scenery of the day change with the sun set 
        reflecting Jakarta’s sky scrappers. You wont experience the beautiful game any else where except 
        here in Pancoran Soccer Field!`
    },
    'Lapangan 2': {
        image: '/src/components/icons/fieldimage2.jpg',
        description: `Lapangan 2 exclusively built with the state of the art facilities to create an 
        experience of playing as a true professional football player. 
        Using the latest technology of 60 mm thick fiber grass that is perfectly safe for players from 
        injury caused by sliding of falling onto grass. Using heavy strong goal post with 
        FIFA standard net. The field dimension follows FIFA’s standard as part of our commitment on 
        sharing FIFA standard facilities for everyone to experience. Each facility is maintained 
        regularly by our professional crew. Surrounded by advertising boards around the field to 
        add a football experience in each photographs your team receives from your photographer. 
        Experience playing in the evening to see a magnificent scenery of the day change with the 
        sun set reflecting Jakarta’s sky scrappers. You wont experience the beautiful game any else 
        where except here in Pancoran Soccer Field!`
    },
}

const fieldImage = ref('')
const fieldDescription = ref('')

const updateFieldInfo = (name) => {
    const details = fieldDetails[name]
    if (details) {
        fieldImage.value = details.image
        fieldDescription.value = details.description
    } else {
        fieldImage.value = '/src/components/icons/defaultFieldImage.jpg' // Default image path if not found
        fieldDescription.value = 'Deskripsi tidak tersedia.' // Default description
    }
}

watch(
    () => formData.value.time,
    (newTime) => {
        if (newTime) {
            totalPrice.value = `Rp. ${pricePerHour.toLocaleString()}`;
        } else {
            totalPrice.value = '';
        }
    }
)

const coupons = [
    { code: "kupon01", nama: "kupon1", start: "2024-10-01", end: "2024-10-30", lapangan: "Lapangan 1", jam: "08:00-10:00", potongan: 10 },
    { code: "kupon02", nama: "kupon2", start: "2024-10-01", end: "2024-10-30", lapangan: "Lapangan 1", jam: "06:00-08:00", potongan: 10 },
    { code: "kupon03", nama: "kupon3", start: "2024-10-01", end: "2024-10-17", lapangan: "Lapangan 1", jam: "06:00-08:00", potongan: 10 },
    { code: "kupon04", nama: "kupon4", start: "2024-10-18", end: "2024-10-30", lapangan: "Lapangan 1", jam: "06:00-08:00", potongan: 10 },
    { code: "kupon05", nama: "kupon5", start: "2024-10-18", end: "2024-10-30", lapangan: "Lapangan 2", jam: "06:00-08:00", potongan: 10 },
    { code: "kupon06", nama: "kupon6", start: "2024-10-19", end: "2024-10-30", lapangan: "Lapangan 1", jam: "06:00-08:00", potongan: 10 },
];

// Redeem kupon
const redeemCoupon = () => {
    const coupon = coupons.find(c => c.code === formData.value.coupon);
    const currentTime = formData.value.time;
    const currentField = formData.value.field;
    const currentDate = new Date(formData.value.date);

    if (coupon) {
        if (coupon.lapangan === currentField && coupon.jam === currentTime) {
            const startDate = new Date(coupon.start);
            const endDate = new Date(coupon.end);

            if (currentDate >= startDate && currentDate <= endDate) {
                const discountAmount = (pricePerHour * coupon.potongan) / 100;
                const discountedPrice = pricePerHour - discountAmount;
                totalPrice.value = `Rp. ${discountedPrice.toLocaleString()}`;
                alert(`Kupon berhasil digunakan! Total harga setelah diskon: ${totalPrice.value}`);
            } else {
                alert('Kupon tidak berlaku pada tanggal ini.');
            }
        } else {
            alert('Kupon tidak berlaku untuk lapangan atau jam yang dipilih.');
        }
    } else {
        alert('Kode kupon tidak valid.');
    }
}

// Mengirim pemesanan
const submitBooking = () => {
    // Validasi data jika perlu
    if (!formData.value.name || !formData.value.email || !formData.value.date || !formData.value.time) {
        alert('Silakan isi semua kolom yang diperlukan.')
        return
    }

    alert(`Booking berhasil untuk lapangan: ${fieldName.value}\nNama: ${formData.value.name}\nEmail: ${formData.value.email}\nTeam: ${formData.value.team}\nTanggal: ${formData.value.date}\nJam: ${formData.value.time}\nTotal Harga: ${totalPrice.value}`)
}
</script>

<style scoped>
.container {
    display: flex;
}

.booking-form {
    flex: 1;
}

.field-info {
    max-width: 500px;
}

.field-info img {
    width: 100%;
    height: auto;
}

.field-info p {
    margin-top: 2rem;
    font-size: 1.2rem;
    line-height: 1.5;
}

h1 {
    margin-bottom: 1.5rem;
}
</style>