<template>
    <v-card>
      <PDFCVComponent></PDFCVComponent>
      <v-btn @click="createPDF"> create</v-btn>
    </v-card>
</template>

<script>
  import jsPDF from 'jspdf'
  import PDFCVComponent from "../createCV/PDFCVComponent";
    export default {
        name: "DetailCV",
      components: {PDFCVComponent},
      methods: {
        createPDF() {
          let pdfName = 'test';
          var doc = new jsPDF();
          doc.text("Hello World", 10, 10);
       //   doc.save(pdfName + '.pdf');
          console.log(doc.output());
        }
    }

  }
</script>

<style scoped>

</style>
