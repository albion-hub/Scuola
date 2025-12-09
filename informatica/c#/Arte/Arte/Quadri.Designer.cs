namespace Arte
{
    partial class Quadri
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            dataGridViewQuadri = new DataGridView();
            ((System.ComponentModel.ISupportInitialize)dataGridViewQuadri).BeginInit();
            SuspendLayout();
            // 
            // dataGridViewQuadri
            // 
            dataGridViewQuadri.BackgroundColor = Color.Yellow;
            dataGridViewQuadri.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridViewQuadri.Location = new Point(97, 71);
            dataGridViewQuadri.Name = "dataGridViewQuadri";
            dataGridViewQuadri.Size = new Size(584, 261);
            dataGridViewQuadri.TabIndex = 0;
            // 
            // Quadri
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.FromArgb(255, 255, 128);
            ClientSize = new Size(800, 450);
            Controls.Add(dataGridViewQuadri);
            Name = "Quadri";
            Text = "Quadri";
            Load += Quadri_Load;
            ((System.ComponentModel.ISupportInitialize)dataGridViewQuadri).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private DataGridView dataGridViewQuadri;
    }
}