function capture() {
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

    // 하트 이미지를 캔버스에 그립니다.
    const heartSize = 100; // 하트 이미지의 크기
    const heartX = canvasElement.width - heartSize - 10; // 하트가 그려질 x 좌표
    const heartY = 10; // 하트가 그려질 y 좌표
    canvasContext.drawImage(heartImage, heartX, heartY, heartSize, heartSize);

    // 촬영된 이미지 다운로드
    const picture = canvasElement.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = picture;
    downloadLink.download = "snapshot.png";
    downloadLink.click();
}
