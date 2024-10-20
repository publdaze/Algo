class Player {
    constructor(pos, start, end, op_start, op_end) {
        this.pos = this.formatTime(pos, "ss");
        this.start = this.formatTime(start, "ss");
        this.end = this.formatTime(end, "ss");
        this.op_start = this.formatTime(op_start, "ss");
        this.op_end = this.formatTime(op_end, "ss");
    }
    
    prev() {
        this.pos = Math.max(this.pos - 10, this.start);
    }
    
    next() {
        this.pos = Math.min(this.pos + 10, this.end);
    }
    
    passOpening() {
        if (this.pos < this.op_start || this.pos > this.op_end) return;
        this.pos = this.op_end;
    }
    
    formatTime(time, format) {
        switch (format) {
            case "ss": 
                const [minutes, seconds] = time.split(":").map(Number);
                return minutes * 60 + seconds;
            case "mm:ss": 
                return `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(time % 60).padStart(2, "0")}`;
        }
    }
    
    getCurrPos() {
        return this.formatTime(this.pos, "mm:ss");
    }
}

function solution(video_len, pos, op_start, op_end, commands) {
    const player = new Player(pos, "00:00", video_len, op_start, op_end);
    
    commands.forEach((command) => {
        player.passOpening();
        player[command]();
        player.passOpening();
    });
    
    return player.getCurrPos();
}