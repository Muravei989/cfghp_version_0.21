package com.yourcompany.heatload;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.io.InputStream;

@Controller
public class PdfController {

    @GetMapping("/download-pdf")
    public ResponseEntity<byte[]> downloadPdf() throws IOException {
        // Load the PDF file from the classpath
        ClassPathResource pdfFile = new ClassPathResource("docs/keinetechlos/KeineTechLos1.pdf");
        InputStream inputStream = pdfFile.getInputStream();

        // Convert the PDF to a byte array
        byte[] pdfBytes = inputStream.readAllBytes();

        // Set up HTTP headers for the response
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("attachment", "KeineTechLos1.pdf");

        // Return the PDF as a ResponseEntity
        return ResponseEntity.ok()
                .headers(headers)
                .body(pdfBytes);
    }
}
